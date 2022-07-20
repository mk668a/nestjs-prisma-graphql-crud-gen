import { InputOmitSetting } from '../config'

export namespace DMMF {
  export interface Document {
    datamodel: Datamodel
    schema: Schema
    modelMappings: ModelMapping[]
  }
  export interface Enum {
    name: string
    dbName?: string | null
    typeName: string
    docs: string | undefined
    valuesMap: Array<{ name: string; value: string }>
  }
  export interface Datamodel {
    models: Model[]
    enums: Enum[]
    types: Model[]
  }
  export interface UniqueIndex {
    name: string
    fields: string[]
  }
  export interface PrimaryKey {
    name: string | null
    fields: string[]
  }
  export interface Model {
    name: string
    dbName: string | null
    fields: ModelField[]
    uniqueFields: string[][]
    uniqueIndexes: UniqueIndex[]
    primaryKey: PrimaryKey | null
    typeName: string
    docs: string | undefined
  }
  export type FieldKind = 'scalar' | 'object' | 'enum' | 'unsupported'
  export type FieldNamespace = 'model' | 'prisma'
  export type FieldLocation = 'scalar' | 'inputObjectTypes' | 'outputObjectTypes' | 'enumTypes'
  // Field
  export interface ModelField {
    // kind: FieldKind;
    name: string
    isRequired: boolean
    isList: boolean
    isUnique: boolean
    isId: boolean
    isReadOnly: boolean
    isGenerated?: boolean
    isUpdatedAt?: boolean
    // type: string;
    dbNames?: string[] | null
    hasDefaultValue: boolean
    default?: FieldDefault | FieldDefaultScalar | FieldDefaultScalar[]
    relationToFields?: any[]
    relationOnDelete?: string
    relationName?: string
    type: string
    location: FieldLocation
    typeFieldAlias?: string
    typeGraphQLType: string
    fieldTSType: string
    docs: string | undefined
    isOmitted: { input: boolean | InputOmitSetting[]; output: boolean }
  }
  export interface FieldDefault {
    name: string
    args: any[]
  }
  export type FieldDefaultScalar = string | boolean | number
  export interface Schema {
    rootQueryType?: string
    rootMutationType?: string
    inputTypes: InputType[]
    outputTypes: OutputType[]
    enums: Enum[]
  }
  export interface Query {
    name: string
    args: SchemaArg[]
    output: QueryOutput
  }
  export interface QueryOutput {
    name: string
    isRequired: boolean
    isList: boolean
  }
  export type ArgType = string | InputType | Enum
  export interface SchemaArgInputType {
    isList: boolean
    location: FieldLocation
    namespace?: FieldNamespace
    type: string
  }
  export interface SchemaArg {
    name: string
    comment?: string
    isNullable: boolean
    isRequired: boolean
    deprecation?: Deprecation
    selectedInputType: SchemaArgInputType
    typeName: string
    typeGraphQLType: string
    fieldTSType: string
    hasMappedName: boolean
    isOmitted: boolean
  }
  export interface OutputType {
    name: string
    fields: OutputSchemaField[]
    typeName: string
    modelName: string | undefined
  }
  export interface SchemaField {
    name: string
    outputType: TypeInfo
    args: SchemaArg[]
    deprecation?: Deprecation
    documentation?: string
    typeGraphQLType: string
    fieldTSType: string
    isRequired: boolean
  }
  export interface Deprecation {
    sinceVersion: string
    reason: string
    plannedRemovalVersion?: string
  }
  export interface TypeInfo {
    isList: boolean
    location: FieldLocation
    namespace?: FieldNamespace
    type: string
  }
  export interface OutputSchemaField extends SchemaField {
    argsTypeName: string | undefined
  }
  export interface InputType {
    name: string
    constraints: {
      maxNumFields: number | null
      minNumFields: number | null
    }
    fields: SchemaArg[]
    typeName: string
    modelName: string | undefined
    modelType: Model | undefined
  }
  export interface ModelMapping {
    model: string
    actions: Action[]
    collectionName: string
    resolverName: string
    modelTypeName: string
  }
  export enum ModelAction {
    findUnique = 'findUnique',
    findFirst = 'findFirst',
    findMany = 'findMany',
    createOne = 'createOne',
    createMany = 'createMany',
    updateOne = 'updateOne',
    updateMany = 'updateMany',
    upsertOne = 'upsertOne',
    deleteOne = 'deleteOne',
    deleteMany = 'deleteMany',
    groupBy = 'groupBy',
    aggregate = 'aggregate',
    findRaw = 'findRaw',
    aggregateRaw = 'aggregateRaw',
  }
  export interface Action {
    name: string
    fieldName: string
    kind: ModelAction
    operation: 'Query' | 'Mutation'
    prismaMethod: string
    method: OutputSchemaField
    argsTypeName: string | undefined
    outputTypeName: string
    actionResolverName: string
    returnTSType: string
    typeGraphQLType: string
  }
  export interface RelationModel {
    model: Model
    outputType: OutputType
    relationFields: RelationField[]
    resolverName: string
  }
  export interface RelationField extends ModelField {
    outputTypeField: OutputSchemaField
    argsTypeName: string | undefined
  }
}
