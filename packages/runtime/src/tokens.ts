/**
 * DI token for the Prisma client. Provide your own PrismaClient (or PrismaService
 * wrapping it) under this token so generated services don't depend on a concrete class.
 *
 * Example:
 *   @Module({ providers: [{ provide: PRISMA_CLIENT, useExisting: PrismaService }],
 *             exports: [PRISMA_CLIENT] })
 *   export class PrismaModule {}
 */
export const PRISMA_CLIENT = Symbol.for('nestjs-prisma-graphql-crud-gen/PRISMA_CLIENT')

/**
 * Structural type — avoids depending on the project-specific `.prisma/client`
 * type, which only exists after `prisma generate` has run in the consumer project.
 */
export type PrismaClientLike = {
  [model: string]: any
}
