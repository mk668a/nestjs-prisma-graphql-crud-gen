import path from 'path'
import { OptionalKind, Project, PropertyDeclarationStructure } from 'ts-morph'
import { DmmfDocument } from './dmmf/DmmfDocument'
import { DMMF } from './dmmf/types'
import { camelCase, getArguments } from './helpers'

export const generateCommonOutput = (dmmfDocument: DmmfDocument, project: Project, outputDir: string) => {
  const modelNames = dmmfDocument.datamodel.models.map((model) => model.name)
  const rootTypes = dmmfDocument.schema.outputTypes.filter((type) => ['Query', 'Mutation'].includes(type.name))
  const outputTypesToGenerate: DMMF.OutputType[] = dmmfDocument.schema.outputTypes.filter(
    (type) => !modelNames.includes(type.name) && !rootTypes.includes(type) && !type.modelName,
  )
  const fileDirPath = path.resolve(outputDir, 'common', 'outputs')

  outputTypesToGenerate.forEach((type) => {
    // generate from types
    const filePath = path.resolve(fileDirPath, `${type.typeName}.output.ts`)
    const sourceFile = project.createSourceFile(filePath, undefined, {
      overwrite: true,
    })

    // imports
    sourceFile.addImportDeclaration({ moduleSpecifier: '@nestjs/graphql', namespaceImport: 'NestJsGraphQL' })
    outputTypesToGenerate.forEach((type) => {
      // import outputs
      const outputs = type.fields.filter((field) => field.outputType.location === 'outputObjectTypes').map((field) => field.outputType.type)
      for (const item of [...new Set(outputs)].sort()) {
        sourceFile.addImportDeclaration({ moduleSpecifier: path.posix.join('../outputs', `${camelCase(item)}.output`), namedImports: [item] })
      }
      if (outputs.length) {
        for (const item of [...new Set(outputs)].sort()) {
          sourceFile.addImportDeclaration({ moduleSpecifier: `./${item}.output`, namedImports: [item] })
        }
      }
      // import enums
      const enumsPrisma = type.fields
        .map((field) => field.outputType)
        .filter((fieldType) => fieldType.location === 'enumTypes' && fieldType.namespace === 'prisma')
        .map((fieldType) => fieldType.type)
      const enumsModel = type.fields
        .map((field) => field.outputType)
        .filter((fieldType) => fieldType.location === 'enumTypes' && fieldType.namespace === 'model')
        .map((fieldType) => fieldType.type)

      if (enumsPrisma.length) {
        for (const item of [...new Set(enumsPrisma)].sort()) {
          sourceFile.addImportDeclaration({ moduleSpecifier: path.posix.join(`../enums`), namedImports: [item] })
        }
      }
      if (enumsModel.length) {
        for (const item of [...new Set(enumsPrisma)].sort()) {
          sourceFile.addImportDeclaration({ moduleSpecifier: path.posix.join(`../../enums/${item}.enum`), namedImports: [item] })
        }
      }
    })

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
