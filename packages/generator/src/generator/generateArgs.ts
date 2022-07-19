import path from 'path'
import { Project } from 'ts-morph'
import { DmmfDocument } from './dmmf/DmmfDocument'

export const generateArgs = (dmmfDocument: DmmfDocument, project: Project, outputDir: string) => {
  const filePath = path.resolve(outputDir, 'args')
  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  })

  // import PrismaNamespace
  sourceFile.addImportDeclaration({
    moduleSpecifier:
      dmmfDocument.options.absolutePrismaOutputPath ??
      path.posix.join(...Array(2).fill('..'), dmmfDocument.options.customPrismaImportPath ?? dmmfDocument.options.relativePrismaOutputPath),
    namedImports: ['Prisma'],
  })
}
