import { DMMF } from './dmmf/types'

export type SupportedQueries = keyof Pick<typeof DMMF.ModelAction, 'findUnique' | 'findFirst' | 'findMany' | 'aggregate' | 'groupBy'>
export const supportedQueryActions: SupportedQueries[] = ['findUnique', 'findFirst', 'findMany', 'aggregate', 'groupBy']

export type SupportedMutations = keyof Pick<
  typeof DMMF.ModelAction,
  'createOne' | 'createMany' | 'deleteOne' | 'updateOne' | 'deleteMany' | 'updateMany' | 'upsertOne'
>
export const supportedMutationActions: SupportedMutations[] = ['createOne', 'createMany', 'deleteOne', 'updateOne', 'deleteMany', 'updateMany', 'upsertOne']

export enum InputOmitSetting {
  Create = 'create',
  Update = 'update',
  Where = 'where',
  OrderBy = 'orderBy',
}
