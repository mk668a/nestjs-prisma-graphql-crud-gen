import path from 'path'
import { EnumMemberStructure, OptionalKind, Project } from 'ts-morph'
import { DmmfDocument } from './dmmf/DmmfDocument'

export const generateEnums = (dmmfDocument: DmmfDocument, project: Project, outputDir: string) => {
  const dirPath = path.resolve(outputDir, 'enums')

  dmmfDocument.datamodel.enums.forEach((enumDef) => {
    const filePath = path.resolve(dirPath, `${enumDef.typeName}.enum.ts`)

    const sourceFile = project.createSourceFile(filePath, undefined, {
      overwrite: true,
    })
    sourceFile.addImportDeclaration({ moduleSpecifier: '@nestjs/graphql', namespaceImport: 'NestJsGraphQL' })

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
