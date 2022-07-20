import { GeneratorOptions } from '@prisma/generator-helper'
import { getDMMF, parseEnvValue } from '@prisma/sdk'
import path from 'path'
import { ModuleKind, Project, ScriptTarget } from 'ts-morph'
import { DmmfDocument } from './generator/dmmf/DmmfDocument'
import { generateArgs } from './generator/generateArgs'
import { generateCommonEnums } from './generator/generateCommonEnums'
import { generateCommonInput } from './generator/generateCommonInput'
import { generateCommonOutput } from './generator/generateCommonOutput'
import { generateEnums } from './generator/generateEnum'
import { generateInput } from './generator/generateInput'
import { generateModel } from './generator/generateModel'
import { generateOutput } from './generator/generateOutput'
import { generateResolver } from './generator/generateResolver'
import { generateService } from './generator/generateService'
import { toUnixPath } from './generator/helpers'
import { ALL_EMIT_BLOCK_KINDS, getBlocksToEmit } from './generator/options'
import { parseStringArray, parseStringBoolean } from './helpers'

export async function generate(options: GeneratorOptions) {
  const outputDir = parseEnvValue(options.generator.output!)
  if (!outputDir) throw new Error('No output was specified for nestjs-prisma-graphql-crud-gen')

  // prepare dmmfDocument
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
  // new project
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

  /**
   * call generaters
   */
  // generate common enums
  generateCommonEnums(dmmfDocument, project, outputDir)
  // generate enums
  generateEnums(dmmfDocument, project, outputDir)
  // generate common input
  generateCommonInput(dmmfDocument, project, outputDir)
  // generate common output
  generateCommonOutput(dmmfDocument, project, outputDir)

  dmmfDocument.datamodel.models.forEach((model) => {
    // generate models
    generateModel(dmmfDocument, project, outputDir, model)
    // generate input
    generateInput(dmmfDocument, project, outputDir, model)
    // generate output
    generateOutput(dmmfDocument, project, outputDir, model)
    // generate args
    generateArgs(dmmfDocument, project, outputDir, model)
    // generate resolver
    generateResolver(project, outputDir, model)
    // generate service
    generateService(project, outputDir, model)
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
