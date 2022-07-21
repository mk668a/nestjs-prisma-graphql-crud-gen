import path from 'path'
import { OptionalKind, Project, PropertyDeclarationStructure, Writers } from 'ts-morph'
import { DmmfDocument } from './dmmf/DmmfDocument'
import { DMMF } from './dmmf/types'
import { camelCase, getArguments } from './helpers'

export const generateOutput = (dmmfDocument: DmmfDocument, project: Project, outputDir: string, model: DMMF.Model) => {
  const modelName = camelCase(model.name)
  const rootTypes = dmmfDocument.schema.outputTypes.filter((type) => ['Query', 'Mutation'].includes(type.name))
  const outputTypesToGenerate: DMMF.OutputType[] = dmmfDocument.schema.outputTypes.filter((type) => type.modelName === model.name && !rootTypes.includes(type))

  // generate from types
  const fileDirPath = path.resolve(outputDir, modelName)
  const filePath = path.resolve(fileDirPath, `${modelName}.output.ts`)
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  })

  // imports
  sourceFile.addImportDeclaration({ moduleSpecifier: '@nestjs/graphql', namespaceImport: 'NestJsGraphQL' })
  const args: string[] = []
  const outputs: string[] = []
  const enums: string[] = []
  outputTypesToGenerate
    .filter((type) => type.modelName !== model.name)
    .forEach((type) => {
      // import args
      for (const item of [...new Set(type.fields.filter((it) => it.argsTypeName).map((it) => it.argsTypeName!))].sort()) {
        if (!args.includes(item)) args.push(item)
      }
      // import outputs
      for (const item of [
        ...new Set(type.fields.filter((field) => field.outputType.location === 'outputObjectTypes').map((field) => field.outputType.type)),
      ].sort()) {
        if (!outputs.includes(item)) outputs.push(item)
      }
      // import enums
      for (const item of [
        ...new Set(
          type.fields
            .map((field) => field.outputType)
            .filter((fieldType) => fieldType.location === 'enumTypes')
            .map((fieldType) => fieldType.type),
        ),
      ].sort()) {
        if (!enums.includes(item)) enums.push(item)
      }
    })
  if (args.length) sourceFile.addImportDeclaration({ moduleSpecifier: path.posix.join('.', `${modelName}.args`), namedImports: args })
  if (outputs.length) sourceFile.addImportDeclaration({ moduleSpecifier: path.posix.join('.', `${modelName}.output`), namedImports: outputs })
  if (enums.length) sourceFile.addImportDeclaration({ moduleSpecifier: path.posix.join('.', `${modelName}.enum`), namedImports: enums })

  outputTypesToGenerate.forEach((type) => {
    sourceFile.addClass({
      name: type.typeName,
      isExported: true,
      decorators: [
        {
          name: 'NestJsGraphQL.ObjectType',
          arguments: [`'${type.typeName}'`, ...getArguments(undefined, undefined, undefined, true, dmmfDocument.options.simpleResolvers)],
        },
      ],
      properties: type.fields.map<OptionalKind<PropertyDeclarationStructure>>((field) => ({
        name: field.name,
        type: field.fieldTSType,
        hasExclamationToken: true,
        hasQuestionToken: false,
        trailingTrivia: '\r\n',
        decorators: [
          {
            name: 'NestJsGraphQL.Field',
            arguments: getArguments(field.typeGraphQLType, undefined, !field.isRequired),
          },
        ],
      })),
    })
  })
}
