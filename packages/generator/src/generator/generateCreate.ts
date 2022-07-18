import { DMMF } from '@prisma/generator-helper'
import path from 'path'
import { Project } from 'ts-morph'

export const generateCreate = (project: Project, output: string, model: DMMF.Model) => {
  const writeLocation = path.join(output, model.name, `${model.name}.ts`)
  const sourceFile = project.createSourceFile(writeLocation, undefined, {
    overwrite: true,
  })
}
