import { Injectable, Inject } from '@nestjs/common'
import { PRISMA_CLIENT, PrismaClientLike } from './tokens'
import { withPrismaErrorMap } from './prismaErrorMap'

export interface BaseCrudServiceOptions {
  softDelete?: boolean
  softDeleteField?: string
}

type AnyArgs = Record<string, any>

/**
 * Base class generated services extend. Provides the 12 standard Prisma
 * operations with built-in error mapping and optional soft-delete behavior.
 *
 * `delegate` is bound by the subclass constructor — it's whichever client
 * accessor matches the Prisma model name (e.g. `prisma.users`).
 */
@Injectable()
export class BaseCrudService {
  protected readonly delegate: any
  protected readonly options: Required<BaseCrudServiceOptions>

  constructor(@Inject(PRISMA_CLIENT) prisma: PrismaClientLike, prismaModel: string, options: BaseCrudServiceOptions = {}) {
    const delegate = prisma[prismaModel]
    if (!delegate) {
      throw new Error(`[nestjs-prisma-graphql-crud-gen] PrismaClient has no model "${prismaModel}"`)
    }
    this.delegate = delegate
    this.options = {
      softDelete: options.softDelete ?? false,
      softDeleteField: options.softDeleteField ?? 'deletedAt',
    }
  }

  private withSoftDeleteWhere(args: AnyArgs | undefined): AnyArgs | undefined {
    if (!this.options.softDelete) return args
    const field = this.options.softDeleteField
    const where = args?.where ?? {}
    return { ...(args ?? {}), where: { ...where, [field]: null } }
  }

  findFirst(args: AnyArgs) {
    return withPrismaErrorMap(() => this.delegate.findFirst(this.withSoftDeleteWhere(args)))
  }
  findUnique(args: AnyArgs) {
    return withPrismaErrorMap(() => this.delegate.findUnique(this.withSoftDeleteWhere(args)))
  }
  findMany(args: AnyArgs) {
    return withPrismaErrorMap(() => this.delegate.findMany(this.withSoftDeleteWhere(args)))
  }
  groupBy(args: AnyArgs) {
    return withPrismaErrorMap(() => this.delegate.groupBy(this.withSoftDeleteWhere(args)))
  }
  aggregate(args: AnyArgs) {
    return withPrismaErrorMap(() => this.delegate.aggregate(this.withSoftDeleteWhere(args)))
  }
  create(args: AnyArgs) {
    return withPrismaErrorMap(() => this.delegate.create(args))
  }
  createMany(args: AnyArgs) {
    return withPrismaErrorMap(() => this.delegate.createMany(args))
  }
  update(args: AnyArgs) {
    return withPrismaErrorMap(() => this.delegate.update(args))
  }
  updateMany(args: AnyArgs) {
    return withPrismaErrorMap(() => this.delegate.updateMany(args))
  }
  upsert(args: AnyArgs) {
    return withPrismaErrorMap(() => this.delegate.upsert(args))
  }
  delete(args: AnyArgs) {
    if (this.options.softDelete) {
      const field = this.options.softDeleteField
      return withPrismaErrorMap(() => this.delegate.update({ where: args.where, data: { [field]: new Date() } }))
    }
    return withPrismaErrorMap(() => this.delegate.delete(args))
  }
  deleteMany(args: AnyArgs) {
    if (this.options.softDelete) {
      const field = this.options.softDeleteField
      return withPrismaErrorMap(() => this.delegate.updateMany({ where: args.where, data: { [field]: new Date() } }))
    }
    return withPrismaErrorMap(() => this.delegate.deleteMany(args))
  }
}
