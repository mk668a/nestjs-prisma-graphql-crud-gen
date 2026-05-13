import path from 'path'
import { OptionalKind, Project, PropertyDeclarationStructure } from 'ts-morph'
import { DmmfDocument } from './dmmf/DmmfDocument'
import { DMMF } from './dmmf/types'
import { camelCase, getArguments } from './helpers'

export const generateArgs = (dmmfDocument: DmmfDocument, project: Project, outputDir: string, model: DMMF.Model) => {
  const modelName = camelCase(model.typeName)
  const writeLocation = path.join(outputDir, modelName, `${modelName}.args.ts`)
  const sourceFile = project.createSourceFile(writeLocation, undefined, {
    overwrite: true,
  })

  // imports
  sourceFile.addImportDeclaration({ moduleSpecifier: '@nestjs/graphql', namespaceImport: 'NestJsGraphQL' })
  const commonEnums: string[] = []
  for (const mapping of dmmfDocument.modelMappings) {
    const actionsWithArgs = mapping.actions.filter((it) => it.argsTypeName !== undefined)
    if (actionsWithArgs.length) {
      for (const action of actionsWithArgs) {
        const fields = action.method.args
        // import inputs (each input lives under its owning model's directory)
        for (const item of [
          ...new Set(
            fields
              .map((arg) => arg.selectedInputType)
              .filter((argInputType) => argInputType.location === 'inputObjectTypes')
              .map((argInputType) => argInputType.type),
          ),
        ].sort()) {
          const owningInput = dmmfDocument.schema.inputTypes.find((it) => it.typeName === item)
          const owningModel = owningInput?.modelName ? dmmfDocument.datamodel.models.find((m) => m.name === owningInput.modelName) : undefined
          const dir = owningModel ? camelCase(owningModel.typeName) : modelName
          sourceFile.addImportDeclaration({
            moduleSpecifier: `../${dir}/inputs/${item}.input`,
            namedImports: [item],
          })
        }
        // import enums
        for (const item of [
          ...new Set(
            fields
              .filter((field) => !field.typeName)
              .map((field) => field.selectedInputType)
              .filter((argType) => argType.location === 'enumTypes' && argType.namespace === 'model')
              .map((argType) => argType.type as string),
          ),
        ].sort()) {
          sourceFile.addImportDeclaration({
            moduleSpecifier: `../enums/${item}.enum`,
            namedImports: [item],
          })
        }
        // import commonEnums
        for (const item of [
          ...new Set(
            fields
              .filter((field) => field.typeName)
              .map((field) => field.selectedInputType)
              .filter((argType) => argType.location === 'enumTypes')
              .map((argType) => argType.type as string),
          ),
        ].sort()) {
          if (!commonEnums.includes(item)) commonEnums.push(item)
        }
      }
    }
  }
  if (commonEnums.length) {
    sourceFile.addImportDeclaration({
      moduleSpecifier: `../common/enums`,
      namedImports: commonEnums,
    })
  }

  // class
  for (const mapping of dmmfDocument.modelMappings) {
    const actionsWithArgs = mapping.actions.filter((it) => it.argsTypeName !== undefined && it.argsTypeName.includes(model.typeName))

    if (actionsWithArgs.length) {
      for (const action of actionsWithArgs) {
        const fields = action.method.args

        sourceFile.addClass({
          name: action.argsTypeName,
          isExported: true,
          decorators: [
            {
              name: 'NestJsGraphQL.ArgsType',
              arguments: [],
            },
          ],
          properties: fields.map<OptionalKind<PropertyDeclarationStructure>>((arg) => {
            return {
              name: arg.typeName,
              type: arg.fieldTSType,
              hasExclamationToken: arg.isRequired,
              hasQuestionToken: !arg.isRequired,
              trailingTrivia: '\r\n',
              decorators: [
                {
                  name: 'NestJsGraphQL.Field',
                  arguments: getArguments(arg.typeGraphQLType, undefined, !arg.isRequired),
                },
              ],
            }
          }),
        })
      }
    }
  }
}
