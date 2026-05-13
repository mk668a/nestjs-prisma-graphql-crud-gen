import { GeneratorOptions } from '@prisma/generator-helper'
import { getDMMF, parseEnvValue } from '@prisma/internals'
import path from 'path'
import { ModuleKind, Project, ScriptTarget } from 'ts-morph'
import { DmmfDocument } from './generator/dmmf/DmmfDocument'
import { generateArgs } from './generator/generateArgs'
import { generateCommonEnums } from './generator/generateCommonEnums'
import { generateCommonInput } from './generator/generateCommonInput'
import { generateCommonOutput } from './generator/generateCommonOutput'
import { generateCrud } from './generator/generateCrud'
import { generateEnums } from './generator/generateEnum'
import { generateInput } from './generator/generateInput'
import { generateModel } from './generator/generateModel'
import { generateOutput } from './generator/generateOutput'
import { toUnixPath } from './generator/helpers'
import { ALL_EMIT_BLOCK_KINDS, EmitBlockKind, getBlocksToEmit } from './generator/options'
import { parseString, parseStringArray, parseStringBoolean } from './helpers'

const DEBUG_ENABLED = (process.env.DEBUG ?? '').includes('nestjs-prisma-crud-gen')
const debug = (step: string, detail?: unknown) => {
  if (!DEBUG_ENABLED) return
  if (detail === undefined) console.error(`[nestjs-prisma-crud-gen] ${step}`)
  else console.error(`[nestjs-prisma-crud-gen] ${step}`, detail)
}

export async function generate(options: GeneratorOptions) {
  const outputDir = parseEnvValue(options.generator.output!)
  if (!outputDir) throw new Error('No output was specified for nestjs-prisma-graphql-crud-gen')

  // prepare dmmfDocument
  const generatorConfig = options.generator.config
  const prismaClientProvider = options.otherGenerators.find((it) => parseEnvValue(it.provider) === 'prisma-client-js')!
  const prismaClientPath = parseEnvValue(prismaClientProvider.output!)

  debug('getDMMF: start', { datamodelLength: options.datamodel?.length })
  let rawDmmf
  try {
    rawDmmf = await getDMMF({
      datamodel: options.datamodel,
    })
  } catch (e) {
    console.error(`[nestjs-prisma-graphql-crud-gen] getDMMF failed. datamodel length=${options.datamodel?.length ?? 0}`)
    throw e
  }
  debug('getDMMF: ok', { models: rawDmmf.datamodel.models.length, enums: rawDmmf.datamodel.enums.length })

  const useNormalizedNaming = parseStringBoolean(generatorConfig.useNormalizedNaming) ?? true
  const emitValidation = parseStringBoolean(generatorConfig.emitValidation) ?? false
  const emitDataLoader = parseStringBoolean(generatorConfig.emitDataLoader) ?? false
  const emitFederation = parseStringBoolean(generatorConfig.emitFederation) ?? false
  const runtimeImportPath = parseString(generatorConfig.runtimeImportPath) ?? 'nestjs-prisma-graphql-crud-gen-runtime'

  const dmmfDocument = new DmmfDocument(
    rawDmmf,
    {
      // legacy options retained internally so old generator helpers don't need rewiring
      emitDMMF: false,
      emitTranspiledCode: false,
      simpleResolvers: false,
      useOriginalMapping: false,
      useUncheckedScalarInputs: false,
      emitIdAsIDType: false,
      customPrismaImportPath: undefined,
      contextPrismaKey: 'prisma',
      // new v2 options
      emitValidation,
      emitDataLoader,
      emitFederation,
      useNormalizedNaming,
      runtimeImportPath,
      outputDirPath: outputDir,
      relativePrismaOutputPath: toUnixPath(path.relative(outputDir, prismaClientPath)),
      absolutePrismaOutputPath: prismaClientPath.includes('node_modules') ? '@prisma/client' : undefined,
      blocksToEmit: getBlocksToEmit(parseStringArray(generatorConfig.emitOnly, 'emitOnly')),
    },
  )
  const emitTranspiledCode = outputDir.includes('node_modules')
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
  const runStep = (step: string, fn: () => void, context?: Record<string, unknown>) => {
    debug(`step start: ${step}`, context)
    try {
      fn()
    } catch (e) {
      const ctx = context ? ` ${JSON.stringify(context)}` : ''
      console.error(`[nestjs-prisma-graphql-crud-gen] step "${step}" failed${ctx}`)
      throw e
    }
    debug(`step ok: ${step}`)
  }

  const shouldEmit = (block: EmitBlockKind) => dmmfDocument.options.blocksToEmit.includes(block)

  if (shouldEmit('enums')) {
    runStep('generateCommonEnums', () => generateCommonEnums(dmmfDocument, project, outputDir))
    runStep('generateEnums', () => generateEnums(dmmfDocument, project, outputDir))
  }
  // Common Prisma inputs/outputs (StringFilter, *FieldUpdateOperationsInput, AffectedRowsOutput, ...) are
  // both bundled into the generated `common/` directory (for self-contained output) and re-exported by
  // the runtime package. Users may import either; runtime exports are useful for hand-written modules.
  if (shouldEmit('inputs')) runStep('generateCommonInput', () => generateCommonInput(dmmfDocument, project, outputDir))
  if (shouldEmit('outputs')) runStep('generateCommonOutput', () => generateCommonOutput(dmmfDocument, project, outputDir))

  for (const model of dmmfDocument.datamodel.models) {
    const ctx = { model: model.name }
    if (shouldEmit('models')) runStep('generateModel', () => generateModel(dmmfDocument, project, outputDir, model), ctx)
    if (shouldEmit('inputs')) runStep('generateInput', () => generateInput(dmmfDocument, project, outputDir, model), ctx)
    if (shouldEmit('outputs')) runStep('generateOutput', () => generateOutput(dmmfDocument, project, outputDir, model), ctx)
    if (shouldEmit('crud')) {
      runStep('generateArgs', () => generateArgs(dmmfDocument, project, outputDir, model), ctx)
      runStep('generateCrud', () => generateCrud(dmmfDocument, project, outputDir, model), ctx)
    }
  }

  // delete unused
  for (const sourceFile of project.getSourceFiles()) {
    sourceFile.fixMissingImports().organizeImports().fixUnusedIdentifiers().formatText()
  }

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
