import { BadRequestException, ConflictException, NotFoundException } from '@nestjs/common'

interface PrismaKnownRequestErrorShape {
  code: string
  meta?: Record<string, unknown>
  message: string
}

function isPrismaKnownRequestError(e: unknown): e is PrismaKnownRequestErrorShape {
  return (
    typeof e === 'object' &&
    e !== null &&
    typeof (e as { code?: unknown }).code === 'string' &&
    (e as { code: string }).code.startsWith('P')
  )
}

/**
 * Map Prisma client errors to NestJS HTTP exceptions so they surface as
 * proper GraphQL errors instead of leaking internal codes.
 *
 * - P2002 unique constraint  -> 409 Conflict
 * - P2025 record not found   -> 404 Not Found
 * - P2003 fk constraint      -> 400 Bad Request
 * - P2000 value too long     -> 400 Bad Request
 */
export function mapPrismaError(e: unknown): unknown {
  if (!isPrismaKnownRequestError(e)) return e
  switch (e.code) {
    case 'P2002':
      return new ConflictException({ code: e.code, target: e.meta?.target, message: 'Unique constraint violation' })
    case 'P2025':
      return new NotFoundException({ code: e.code, cause: e.meta?.cause, message: 'Record not found' })
    case 'P2003':
      return new BadRequestException({ code: e.code, field_name: e.meta?.field_name, message: 'Foreign key constraint violation' })
    case 'P2000':
      return new BadRequestException({ code: e.code, column_name: e.meta?.column_name, message: 'Value too long for column' })
    default:
      return e
  }
}

export async function withPrismaErrorMap<T>(op: () => Promise<T>): Promise<T> {
  try {
    return await op()
  } catch (e) {
    throw mapPrismaError(e)
  }
}
