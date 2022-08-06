import path from 'path'
import { GetAccessorDeclarationStructure, OptionalKind, Project, PropertyDeclarationStructure, SetAccessorDeclarationStructure, Writers } from 'ts-morph'
import { DmmfDocument } from './dmmf/DmmfDocument'
import { getArguments } from './helpers'

export const generateCommonInput = (dmmfDocument: DmmfDocument, project: Project, outputDir: string) => {
  const dirPath = path.resolve(outputDir, 'common', 'inputs')

  dmmfDocument.schema.inputTypes
    .filter((inputType) => !inputType.modelType)
    .forEach((inputType) => {
      const filePath = path.resolve(dirPath, `${inputType.typeName}.input.ts`)
      const sourceFile = project.createSourceFile(filePath, undefined, {
        overwrite: true,
      })

      // imports
      sourceFile.addImportDeclaration({ moduleSpecifier: '@nestjs/graphql', namespaceImport: 'NestJsGraphQL' })
      // import enums
      const enums: string[] = []
      dmmfDocument.schema.inputTypes.forEach((inputType) => {
        enums.push(
          ...inputType.fields
            .map((field) => field.selectedInputType)
            .filter((fieldType) => fieldType.location === 'enumTypes')
            .map((fieldType) => fieldType.type as string),
        )
      })
      if (enums.length) {
        sourceFile.addImportDeclaration({
          moduleSpecifier: '../enums',
          namedImports: [...new Set(enums)],
        })
      }

      const fieldsToEmit = inputType.fields.filter((field) => !field.isOmitted)
      const mappedFields = fieldsToEmit.filter((field) => field.hasMappedName)

      sourceFile.addClass({
        name: inputType.typeName,
        isExported: true,
        decorators: [
          {
            name: 'NestJsGraphQL.InputType',
            arguments: [`'${inputType.typeName}'`, ...getArguments(undefined, undefined, undefined, true)],
          },
        ],
        properties: fieldsToEmit.map<OptionalKind<PropertyDeclarationStructure>>((field) => {
          return {
            name: field.name,
            type: field.fieldTSType,
            hasExclamationToken: !!field.isRequired,
            hasQuestionToken: !field.isRequired,
            trailingTrivia: '\r\n',
            decorators: field.hasMappedName
              ? []
              : [
                  {
                    name: 'NestJsGraphQL.Field',
                    arguments: getArguments(field.typeGraphQLType, undefined, !field.isRequired),
                  },
                ],
          }
        }),
        getAccessors: mappedFields.map<OptionalKind<GetAccessorDeclarationStructure>>((field) => {
          return {
            name: field.typeName,
            type: field.fieldTSType,
            hasExclamationToken: field.isRequired,
            hasQuestionToken: !field.isRequired,
            trailingTrivia: '\r\n',
            statements: [`return this.${field.name};`],
            decorators: [
              {
                name: 'NestJsGraphQL.Field',
                arguments: getArguments(field.typeGraphQLType, undefined, !field.isRequired),
              },
            ],
          }
        }),
        setAccessors: mappedFields.map<OptionalKind<SetAccessorDeclarationStructure>>((field) => {
          return {
            name: field.typeName,
            type: field.fieldTSType,
            hasExclamationToken: field.isRequired,
            hasQuestionToken: !field.isRequired,
            trailingTrivia: '\r\n',
            parameters: [{ name: field.name, type: field.fieldTSType }],
            statements: [`this.${field.name} = ${field.name};`],
          }
        }),
      })
    })
}
