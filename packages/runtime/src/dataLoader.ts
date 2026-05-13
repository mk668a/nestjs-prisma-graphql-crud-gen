/**
 * Per-request DataLoader registry. Use inside resolver fields to batch
 * relation lookups and avoid N+1.
 *
 * Wire by attaching a registry per request in the GraphQL context:
 *   context: ({ req }) => ({ loaders: createLoaderRegistry(prisma) })
 *
 * Then in a field resolver:
 *   @ResolveField(() => Author)
 *   async author(@Parent() post: Post, @Context() ctx: any) {
 *     return ctx.loaders.byId('users', post.authorId)
 *   }
 */
import type { PrismaClientLike } from './tokens'

type Loader<K, V> = {
  load: (key: K) => Promise<V | null>
}

let DataLoaderCtor: any = null
try {
  // optional dep - require lazily so users not using N+1 helpers don't need it
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  DataLoaderCtor = require('dataloader').default ?? require('dataloader')
} catch {
  /* dataloader not installed; loaders are unavailable */
}

export interface LoaderRegistry {
  byId<V = unknown>(prismaModel: string, id: string | number): Promise<V | null>
}

export function createLoaderRegistry(prisma: PrismaClientLike): LoaderRegistry {
  if (!DataLoaderCtor) {
    throw new Error(
      `[nestjs-prisma-graphql-crud-gen] DataLoader is not installed. Run \`yarn add dataloader\` to enable N+1 batching.`,
    )
  }
  const loaders = new Map<string, Loader<string | number, unknown>>()
  const getLoader = (prismaModel: string): Loader<string | number, unknown> => {
    const existing = loaders.get(prismaModel)
    if (existing) return existing
    const delegate = prisma[prismaModel]
    if (!delegate) throw new Error(`PrismaClient has no model "${prismaModel}"`)
    const fresh = new DataLoaderCtor(async (ids: readonly (string | number)[]) => {
      const rows: Array<{ id: string | number }> = await delegate.findMany({ where: { id: { in: [...ids] } } })
      const byId = new Map<string | number, unknown>(rows.map((r) => [r.id, r]))
      return ids.map((id) => byId.get(id) ?? null)
    })
    loaders.set(prismaModel, fresh)
    return fresh
  }
  return {
    byId: (prismaModel, id) => getLoader(prismaModel).load(id) as Promise<any>,
  }
}
