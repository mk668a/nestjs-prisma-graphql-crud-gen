import path from 'path'
import { GetAccessorDeclarationStructure, OptionalKind, Project, PropertyDeclarationStructure, SetAccessorDeclarationStructure, Writers } from 'ts-morph'
import { DmmfDocument } from './dmmf/DmmfDocument'
import { DMMF } from './dmmf/types'
import { camelCase, getArguments } from './helpers'

export const generateInput = (dmmfDocument: DmmfDocument, project: Project, outputDir: string, model: DMMF.Model) => {
  const modelName = camelCase(model.name)
  const filePath = path.resolve(outputDir, `${modelName}/${modelName}.input.ts`)
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  })

  // imports
  sourceFile.addImportDeclaration({ moduleSpecifier: '@nestjs/graphql', namespaceImport: 'NestJsGraphQL' })
  // import commonInputs
  const commonInputs: string[] = []
  dmmfDocument.schema.inputTypes
    .filter((inputType) => !inputType.modelType)
    .forEach((inputType) => {
      if (!commonInputs.includes(inputType.typeName)) {
        commonInputs.push(inputType.typeName)
      }
    })
  if (commonInputs.length) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: `../common/inputs`,
      namedImports: commonInputs,
    })
  }
  // import inputs
  const inputs: { [key: string]: string[] } = {}
  dmmfDocument.schema.inputTypes
    .filter((inputType) => inputType.modelType && inputType.modelName !== model.name)
    .forEach((inputType) => {
      const key = camelCase(inputType.modelName!)
      if (!inputs[key]) inputs[key] = []
      if (!inputs[key].includes(inputType.typeName)) {
        inputs[key].push(inputType.typeName)
      }
    })
  Object.entries(inputs).forEach(([key, val]) => {
    sourceFile.addImportDeclaration({
      moduleSpecifier: `../${key}/${key}.input`,
      namedImports: inputs[key],
    })
  })
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
      moduleSpecifier: '../common/enums',
      namedImports: [...new Set(enums)],
    })
  }

  dmmfDocument.schema.inputTypes
    .filter((inputType) => inputType.modelType && inputType.modelName === model.name)
    .forEach((inputType) => {
      const fieldsToEmit = inputType.fields.filter((field) => !field.isOmitted)
      const mappedFields = fieldsToEmit.filter((field) => field.hasMappedName)

      sourceFile.addClass({
        name: inputType.typeName,
        isExported: true,
        decorators: [
          {
            name: 'NestJsGraphQL.InputType',
            arguments: [`'${inputType.typeName}'`, ...getArguments(undefined, undefined, false, true)],
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
