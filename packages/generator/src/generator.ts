import { GeneratorOptions } from '@prisma/generator-helper'
import { getDMMF, parseEnvValue } from '@prisma/sdk'
import path from 'path'
import { ModuleKind, Project, ScriptTarget } from 'ts-morph'
import { DmmfDocument } from './generator/dmmf/DmmfDocument'
import { generateCustomScalars } from './generator/generateCustomScalars'
import { generateModel } from './generator/generateModel'
import { toUnixPath } from './generator/helpers'
import { ALL_EMIT_BLOCK_KINDS, getBlocksToEmit } from './generator/options'
import { parseStringArray, parseStringBoolean } from './helpers'

export async function generate(options: GeneratorOptions) {
  const output = options.generator.output?.value

  if (!output) throw new Error('No output was specified for nestjs-prisma-graphql-crud-gen')

  const project = new Project({
    compilerOptions: {
      target: ScriptTarget.ES2019,
      module: ModuleKind.CommonJS,
      emitDecoratorMetadata: true,
      experimentalDecorators: true,
      esModuleInterop: true,
      declaration: true,
      importHelpers: true,
    },
  })

  const outputDir = parseEnvValue(options.generator.output!)
  const generatorConfig = options.generator.config
  const prismaClientProvider = options.otherGenerators.find((it) => parseEnvValue(it.provider) === 'prisma-client-js')!
  const prismaClientPath = parseEnvValue(prismaClientProvider.output!)
  const dmmfDocument = new DmmfDocument(
    await getDMMF({
      datamodel: options.datamodel,
      previewFeatures: prismaClientProvider.previewFeatures,
    }),
    {
      emitDMMF: parseStringBoolean(generatorConfig.emitDMMF),
      emitTranspiledCode: parseStringBoolean(generatorConfig.emitTranspiledCode),
      simpleResolvers: parseStringBoolean(generatorConfig.simpleResolvers),
      useOriginalMapping: parseStringBoolean(generatorConfig.useOriginalMapping),
      useUncheckedScalarInputs: parseStringBoolean(generatorConfig.useUncheckedScalarInputs),
      emitIdAsIDType: parseStringBoolean(generatorConfig.emitIdAsIDType),
      customPrismaImportPath: generatorConfig.customPrismaImportPath,
      outputDirPath: outputDir,
      relativePrismaOutputPath: toUnixPath(path.relative(outputDir, prismaClientPath)),
      absolutePrismaOutputPath: prismaClientPath.includes('node_modules') ? '@prisma/client' : undefined,
      blocksToEmit: getBlocksToEmit(parseStringArray(generatorConfig.emitOnly, 'emitOnly', ALL_EMIT_BLOCK_KINDS)),
      contextPrismaKey: generatorConfig.contextPrismaKey ?? 'prisma',
    },
  )

  // scalars
  const scalarsSourceFile = project.createSourceFile(output + '/scalars.ts', undefined, { overwrite: true })
  generateCustomScalars(scalarsSourceFile, dmmfDocument.options)
  // models
  dmmfDocument.datamodel.models.forEach((model) => {
    console.log(model)

    // generate models
    generateModel(dmmfDocument, project, output, model)
    // generate resolver & services
    // generateCreate(project, output, model)
  })

  // generate module

  try {
    await project.save()
  } catch (e) {
    console.error('Error: unable to write files for nestjs-prisma-graphql-crud-gen')
    throw e
  }
}
