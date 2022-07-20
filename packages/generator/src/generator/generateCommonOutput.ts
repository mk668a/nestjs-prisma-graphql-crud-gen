import path from 'path'
import { OptionalKind, Project, PropertyDeclarationStructure, Writers } from 'ts-morph'
import { DmmfDocument } from './dmmf/DmmfDocument'
import { DMMF } from './dmmf/types'
import { camelCase, getArguments } from './helpers'

export const generateCommonOutput = (dmmfDocument: DmmfDocument, project: Project, outputDir: string) => {
  const modelNames = dmmfDocument.datamodel.models.map((model) => model.name)
  const rootTypes = dmmfDocument.schema.outputTypes.filter((type) => ['Query', 'Mutation'].includes(type.name))
  const outputTypesToGenerate: DMMF.OutputType[] = dmmfDocument.schema.outputTypes.filter(
    (type) => !modelNames.includes(type.name) && !rootTypes.includes(type) && !type.modelName,
  )

  // generate from types
  const fileDirPath = path.resolve(outputDir, 'common')
  const filePath = path.resolve(fileDirPath, `outputs.ts`)
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  })

  // imports
  sourceFile.addImportDeclaration({ moduleSpecifier: '@nestjs/graphql', namespaceImport: 'NestJsGraphQL' })
  outputTypesToGenerate.forEach((type) => {
    // import args
    const fieldArgsTypeNames = type.fields.filter((it) => it.argsTypeName).map((it) => it.argsTypeName!)
    for (const item of [...new Set(fieldArgsTypeNames)].sort()) {
      sourceFile.addImportDeclaration({ moduleSpecifier: path.posix.join('./args', `${camelCase(item)}.args`), namedImports: [item] })
    }
    // import outputs
    const outputs = type.fields.filter((field) => field.outputType.location === 'outputObjectTypes').map((field) => field.outputType.type)
    for (const item of [...new Set(outputs)].sort()) {
      sourceFile.addImportDeclaration({ moduleSpecifier: path.posix.join('../outputs', `${camelCase(item)}.args`), namedImports: [item] })
    }
    // import enums
    const enums = type.fields
      .map((field) => field.outputType)
      .filter((fieldType) => fieldType.location === 'enumTypes')
      .map((fieldType) => fieldType.type)
    for (const item of [...new Set(enums)].sort()) {
      sourceFile.addImportDeclaration({ moduleSpecifier: path.posix.join('../enums', `${camelCase(item)}.args`), namedImports: [item] })
    }
  })

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
