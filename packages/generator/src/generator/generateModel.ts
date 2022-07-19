import path from 'path'
import { GetAccessorDeclarationStructure, OptionalKind, Project, PropertyDeclarationStructure, Writers } from 'ts-morph'
import { DmmfDocument } from './dmmf/DmmfDocument'
import { DMMF } from './dmmf/types'
import { camelCase, convertNewLines, getArguments } from './helpers'

export const generateModel = (dmmfDocument: DmmfDocument, project: Project, outputDir: string, model: DMMF.Model) => {
  const modelName = camelCase(model.name)
  const writeLocation = path.join(outputDir, 'models', `${modelName}.model.ts`)
  const sourceFile = project.createSourceFile(writeLocation, undefined, {
    overwrite: true,
  })

  // imports
  sourceFile.addImportDeclaration({
    moduleSpecifier: '@nestjs/graphql',
    namespaceImport: 'NestJsGraphQL',
  })
  // import enums
  const enums = model.fields.filter((field) => field.location === 'enumTypes').map((field) => field.type)
  for (const item of [...new Set(enums)].sort()) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: path.posix.join('../enums', `${camelCase(item)}.enum`),
      namedImports: enums,
    })
  }
  // import models
  const models = model.fields
    .filter((field) => field.location === 'outputObjectTypes')
    .filter((field) => field.type !== model.name)
    .map((field) => (dmmfDocument.isModelName(field.type) ? dmmfDocument.getModelTypeName(field.type)! : field.type))
  for (const item of [...new Set(models)].sort()) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: path.posix.join('../models', `${camelCase(item)}.model`),
      namedImports: [item],
    })
  }

  // class
  sourceFile.addClass({
    name: model.typeName,
    isExported: true,
    decorators: [
      {
        name: 'NestJsGraphQL.ObjectType',
        arguments: [
          `"${model.typeName}"`,
          Writers.object({
            isAbstract: 'true',
            ...(model.docs && { description: `"${model.docs}"` }),
            ...(dmmfDocument.options.simpleResolvers && {
              simpleResolvers: 'true',
            }),
          }),
        ],
      },
    ],
    properties: [
      ...model.fields.map<OptionalKind<PropertyDeclarationStructure>>((field) => {
        const isOptional = !!field.relationName || field.isOmitted.output || (!field.isRequired && field.typeFieldAlias === undefined)

        return {
          name: field.name,
          type: field.fieldTSType,
          hasExclamationToken: !isOptional,
          hasQuestionToken: isOptional,
          trailingTrivia: '\r\n',
          decorators: [
            ...(field.relationName || field.typeFieldAlias || field.isOmitted.output
              ? []
              : [
                  {
                    name: 'NestJsGraphQL.Field',
                    arguments: getArguments(field.typeGraphQLType, field.docs, isOptional),
                  },
                ]),
          ],
          ...(field.docs && {
            docs: [{ description: `\n${convertNewLines(field.docs)}` }],
          }),
        }
      }),
    ],
    getAccessors: model.fields
      .filter((field) => field.typeFieldAlias && !field.relationName && !field.isOmitted.output)
      .map<OptionalKind<GetAccessorDeclarationStructure>>((field) => {
        return {
          name: field.typeFieldAlias!,
          returnType: field.fieldTSType,
          trailingTrivia: '\r\n',
          decorators: [
            {
              name: 'NestJsGraphQL.Field',
              arguments: getArguments(field.typeGraphQLType, field.docs, !field.isRequired),
            },
          ],
          statements: [field.isRequired ? `return this.${field.name};` : `return this.${field.name} ?? null;`],
          ...(field.docs && {
            docs: [{ description: `\n${convertNewLines(field.docs)}` }],
          }),
        }
      }),
    ...(model.docs && {
      docs: [{ description: `\n${convertNewLines(model.docs)}` }],
    }),
  })
}
