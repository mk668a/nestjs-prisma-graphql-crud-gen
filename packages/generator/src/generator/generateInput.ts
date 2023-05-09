import path from 'path'
import { GetAccessorDeclarationStructure, OptionalKind, Project, PropertyDeclarationStructure, SetAccessorDeclarationStructure } from 'ts-morph'
import { DmmfDocument } from './dmmf/DmmfDocument'
import { DMMF } from './dmmf/types'
import { camelCase, getArguments } from './helpers'

export const generateInput = (dmmfDocument: DmmfDocument, project: Project, outputDir: string, model: DMMF.Model) => {
  const modelName = camelCase(model.name)
  const inputTypesToGenerate = dmmfDocument.schema.inputTypes.filter((inputType) => inputType.modelType && inputType.modelName === model.name)

  inputTypesToGenerate.forEach((inputType) => {
    const filePath = path.resolve(outputDir, `${modelName}/inputs/${inputType.typeName}.input.ts`)
    const sourceFile = project.createSourceFile(filePath, undefined, {
      overwrite: true,
    })

    // imports
    sourceFile.addImportDeclaration({ moduleSpecifier: '@nestjs/graphql', namespaceImport: 'NestJsGraphQL' })
    // import commonInputs
    dmmfDocument.schema.inputTypes
      .filter((_inputType) => !_inputType.modelType)
      .forEach((_inputType) => {
        sourceFile.addImportDeclaration({
          moduleSpecifier: `../../common/inputs/${_inputType.typeName}.input`,
          namedImports: [_inputType.typeName],
        })
      })
    // import inputs
    dmmfDocument.schema.inputTypes
      .filter((_inputType) => _inputType.modelType && _inputType.typeName !== inputType.typeName)
      .forEach((_inputType) => {
        sourceFile.addImportDeclaration({
          moduleSpecifier: `../../${camelCase(_inputType.modelName!)}/inputs/${_inputType.typeName}.input`,
          namedImports: [_inputType.typeName],
        })
      })
    // import enums
    const enumsPrisma: string[] = []
    const enumsModel: string[] = []
    dmmfDocument.schema.inputTypes.forEach((_inputType) => {
      enumsPrisma.push(
        ..._inputType.fields
          .map((field) => field.selectedInputType)
          .filter((fieldType) => fieldType.location === 'enumTypes' && fieldType.namespace === 'prisma')
          .map((fieldType) => fieldType.type as string),
      )
      enumsModel.push(
        ..._inputType.fields
          .map((field) => field.selectedInputType)
          .filter((fieldType) => fieldType.location === 'enumTypes' && fieldType.namespace === 'model')
          .map((fieldType) => fieldType.type as string),
      )
    })

    if (enumsPrisma.length) {
      sourceFile.addImportDeclaration({
        moduleSpecifier: '../../common/enums',
        namedImports: [...new Set(enumsPrisma)],
      })
    }
    if (enumsModel.length) {
      enumsModel.forEach((name) => {
        sourceFile.addImportDeclaration({
          moduleSpecifier: `../../enums/${name}.enum`,
          namedImports: [name],
        })
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
