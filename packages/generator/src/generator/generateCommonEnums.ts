import path from 'path'
import { EnumMemberStructure, OptionalKind, Project } from 'ts-morph'
import { DmmfDocument } from './dmmf/DmmfDocument'

export const generateCommonEnums = (dmmfDocument: DmmfDocument, project: Project, outputDir: string) => {
  const dirPath = path.resolve(outputDir, 'common')
  const filePath = path.resolve(dirPath, 'enums.ts')

  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  })
  sourceFile.addImportDeclaration({ moduleSpecifier: '@nestjs/graphql', namespaceImport: 'NestJsGraphQL' })

  const datamodelEnumNames = dmmfDocument.datamodel.enums.map((enumDef) => enumDef.typeName)
  dmmfDocument.schema.enums
    // skip enums from datamodel
    .filter((enumDef) => !datamodelEnumNames.includes(enumDef.typeName))
    .forEach((enumDef) => {
      sourceFile.addEnum({
        isExported: true,
        name: enumDef.typeName,
        members: enumDef.valuesMap.map<OptionalKind<EnumMemberStructure>>(({ name, value }) => ({
          name,
          value,
        })),
      })

      sourceFile.addStatements([
        `NestJsGraphQL.registerEnumType(${enumDef.typeName}, {
          name: "${enumDef.typeName}",
          description: ${enumDef.docs ? `"${enumDef.docs}"` : 'undefined'},
        });`,
      ])
    })
}
