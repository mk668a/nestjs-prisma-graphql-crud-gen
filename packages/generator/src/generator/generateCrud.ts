import path from 'path'
import { Project } from 'ts-morph'
import { DmmfDocument } from './dmmf/DmmfDocument'
import { DMMF } from './dmmf/types'
import { ALL_CRUD_OPERATIONS, CrudOperation, parseModelDirectives } from './directives'
import { camelCase } from './helpers'

/**
 * Generates a single consolidated `<model>.crud.ts` file per model containing
 * the service, resolver, and module. Replaces v1's split resolver/service/module
 * file trio. Uses the runtime package's `BaseCrudService` + `PRISMA_CLIENT`
 * token so generated code is minimal.
 */
export const generateCrud = (dmmfDocument: DmmfDocument, project: Project, outputDir: string, model: DMMF.Model) => {
  const dirName = camelCase(model.typeName)
  const filePath = path.resolve(outputDir, `${dirName}/${dirName}.crud.ts`)
  const sourceFile = project.createSourceFile(filePath, undefined, { overwrite: true })

  const typeName = model.typeName // e.g. "User" (normalized) or "Users" (original)
  // Prisma client delegate keys are camelCase'd from the SQL/Prisma model name (not the GraphQL typeName).
  const prismaModelKey = model.name[0].toLowerCase() + model.name.slice(1)
  const rawDocs = (model as any).documentation ?? (model as any).docs
  const directives = parseModelDirectives(rawDocs)
  const opsToEmit: CrudOperation[] = directives.crud?.operations ?? ALL_CRUD_OPERATIONS
  const softDelete = directives.softDelete
  const auth = directives.auth
  const runtimePkg = dmmfDocument.options.runtimeImportPath

  // Action name helpers based on naming option
  const arg = (op: CrudOperation) => `${argClassName(op, typeName)}`
  const argImports = opsToEmit.map(arg).sort()

  sourceFile.addStatements(`/* eslint-disable */
import * as NestJsGraphql from '@nestjs/graphql'
import { Inject, Injectable, Module${auth ? ', UseGuards, SetMetadata' : ''} } from '@nestjs/common'
import { BaseCrudService, AffectedRowsOutput, PRISMA_CLIENT } from '${runtimePkg}'
import { ${typeName} } from '../models/${dirName}.model'
import { Aggregate${typeName} } from './outputs/Aggregate${typeName}.output'
import { ${typeName}GroupBy } from './outputs/${typeName}GroupBy.output'
import {
  ${argImports.join(',\n  ')}
} from './${dirName}.args'

@Injectable()
export class ${typeName}Service extends BaseCrudService {
  constructor(@Inject(PRISMA_CLIENT) prisma: any) {
    super(prisma, '${prismaModelKey}', { softDelete: ${softDelete ? 'true' : 'false'}${softDelete && softDelete.field !== 'deletedAt' ? `, softDeleteField: '${softDelete.field}'` : ''} })
  }
}

${auth ? `const ROLES_KEY = '__nestjs-prisma-graphql-crud-gen.roles'
const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles)
` : ''}@NestJsGraphql.Resolver(() => ${typeName})
${auth ? `@UseGuards()\n@Roles(${auth.roles.map((r) => JSON.stringify(r)).join(', ')})\n` : ''}export class ${typeName}Resolver {
  constructor(private readonly service: ${typeName}Service) {}

${opsToEmit.map((op) => renderOperation(op, typeName)).filter(Boolean).join('\n\n')}
}

@Module({ providers: [${typeName}Service, ${typeName}Resolver], exports: [${typeName}Service] })
export class ${typeName}Module {}
`)
}

function argClassName(op: CrudOperation, typeName: string): string {
  // Match arg names produced by generateArgs.ts (PascalCase action prefix + ModelArgs)
  const argMap: Record<CrudOperation, string> = {
    findFirst: `FindFirst${typeName}Args`,
    findUnique: `FindUnique${typeName}Args`,
    findMany: `FindMany${typeName}Args`,
    groupBy: `GroupBy${typeName}Args`,
    aggregate: `Aggregate${typeName}Args`,
    create: `CreateOne${typeName}Args`,
    createMany: `CreateMany${typeName}Args`,
    update: `UpdateOne${typeName}Args`,
    updateMany: `UpdateMany${typeName}Args`,
    upsert: `UpsertOne${typeName}Args`,
    delete: `DeleteOne${typeName}Args`,
    deleteMany: `DeleteMany${typeName}Args`,
  }
  return argMap[op]
}

function renderOperation(op: CrudOperation, typeName: string): string {
  const cls = argClassName(op, typeName)
  const single = `() => ${typeName}, { nullable: false }`
  const list = `() => [${typeName}], { nullable: false }`
  const affected = `() => AffectedRowsOutput, { nullable: true }`
  const aggregate = `() => Aggregate${typeName}, { nullable: false }`
  const groupBy = `() => [${typeName}GroupBy], { nullable: false }`
  const nullableSingle = `() => ${typeName}, { nullable: true }`

  switch (op) {
    case 'findFirst':
      return decoratorBlock('Query', single, `findFirst${typeName}`, cls, `service.findFirst(args)`)
    case 'findUnique':
      return decoratorBlock('Query', single, `findUnique${typeName}`, cls, `service.findUnique(args)`)
    case 'findMany':
      return decoratorBlock('Query', list, `findMany${typeName}`, cls, `service.findMany(args)`)
    case 'groupBy':
      return decoratorBlock('Query', groupBy, `groupBy${typeName}`, cls, `service.groupBy(args)`)
    case 'aggregate':
      return decoratorBlock('Query', aggregate, `aggregate${typeName}`, cls, `service.aggregate(args)`)
    case 'create':
      return decoratorBlock('Mutation', nullableSingle, `create${typeName}`, cls, `service.create(args)`)
    case 'createMany':
      return decoratorBlock('Mutation', affected, `createMany${typeName}`, cls, `service.createMany(args)`)
    case 'update':
      return decoratorBlock('Mutation', nullableSingle, `update${typeName}`, cls, `service.update(args)`)
    case 'updateMany':
      return decoratorBlock('Mutation', affected, `updateMany${typeName}`, cls, `service.updateMany(args)`)
    case 'upsert':
      return decoratorBlock('Mutation', nullableSingle, `upsert${typeName}`, cls, `service.upsert(args)`)
    case 'delete':
      return decoratorBlock('Mutation', nullableSingle, `delete${typeName}`, cls, `service.delete(args)`)
    case 'deleteMany':
      return decoratorBlock('Mutation', affected, `deleteMany${typeName}`, cls, `service.deleteMany(args)`)
  }
}

function decoratorBlock(kind: 'Query' | 'Mutation', returnDecl: string, methodName: string, argsClass: string, body: string): string {
  return `  @NestJsGraphql.${kind}(${returnDecl})
  ${methodName}(@NestJsGraphql.Args() args: ${argsClass}) {
    return this.${body}
  }`
}
