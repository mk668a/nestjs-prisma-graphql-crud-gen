import { GeneratorOptions } from '@prisma/generator-helper'
import { getDMMF, parseEnvValue } from '@prisma/sdk'
import path from 'path'
import { ModuleKind, Project, ScriptTarget } from 'ts-morph'
import { DmmfDocument } from './generator/dmmf/DmmfDocument'
import { generateCommonEnums } from './generator/generateCommonEnums'
import { generateEnums } from './generator/generateEnum'
import { generateModel } from './generator/generateModel'
import { toUnixPath } from './generator/helpers'
import { ALL_EMIT_BLOCK_KINDS, getBlocksToEmit } from './generator/options'
import { parseStringArray, parseStringBoolean } from './helpers'

export async function generate(options: GeneratorOptions) {
  const outputDir = parseEnvValue(options.generator.output!)
  if (!outputDir) throw new Error('No output was specified for nestjs-prisma-graphql-crud-gen')
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
  const emitTranspiledCode = parseStringBoolean(generatorConfig.emitTranspiledCode) ?? outputDir.includes('node_modules')
  const project = new Project({
    compilerOptions: {
      target: ScriptTarget.ES2019,
      module: ModuleKind.CommonJS,
      emitDecoratorMetadata: true,
      experimentalDecorators: true,
      esModuleInterop: true,
      declaration: true,
      importHelpers: true,
      ...(emitTranspiledCode && {
        declaration: true,
        importHelpers: true,
      }),
    },
  })

  // generate common enums
  generateCommonEnums(dmmfDocument, project, outputDir)
  // generate enums
  generateEnums(dmmfDocument, project, outputDir)

  // generate common input

  dmmfDocument.datamodel.models.forEach((model) => {
    // generate models
    generateModel(dmmfDocument, project, outputDir, model)
    // generate args
    // generate input
    // generate output
    // generate resolver
    // generate service
  })

  try {
    if (emitTranspiledCode) await project.emit()
    else {
      for (const file of project.getSourceFiles()) {
        file.formatText({ indentSize: 2 })
      }
      await project.save()
    }
  } catch (e) {
    console.error('Error: unable to write files for nestjs-prisma-graphql-crud-gen')
    throw e
  }
}
