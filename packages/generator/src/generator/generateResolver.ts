import path from 'path'
import { Project } from 'ts-morph'
import { DmmfDocument } from './dmmf/DmmfDocument'
import { DMMF } from './dmmf/types'
import { camelCase } from './helpers'

export const generateResolver = (dmmfDocument: DmmfDocument, project: Project, outputDir: string, model: DMMF.Model) => {
  const modelName = camelCase(model.name)
  const writeLocation = path.join(outputDir, modelName, `${modelName}.resolver.ts`)
  const sourceFile = project.createSourceFile(writeLocation, undefined, {
    overwrite: true,
  })

  // dmmfDocument.relationModels.forEach((relationModel) => generateRelationsResolverClassesFromModel(project, outputDir, dmmfDocument, relationModel))
  // const relationResolversBarrelExportSourceFile = project.createSourceFile(
  //   path.resolve(outputDir, 'resolversFolderName', 'relationsResolversFolderName', 'resolvers.index.ts'),
  //   undefined,
  //   { overwrite: true },
  // )
}
