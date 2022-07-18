export type EmitBlockKind = 'enums' | 'models' | 'crudResolvers' | 'relationResolvers' | 'inputs' | 'outputs'

export const ALL_EMIT_BLOCK_KINDS: EmitBlockKind[] = ['enums', 'models', 'crudResolvers', 'relationResolvers', 'inputs', 'outputs']

export const BLOCKS_DEPENDENCIES_MAP: Record<EmitBlockKind, EmitBlockKind[]> = {
  enums: [],
  models: ['enums'],
  crudResolvers: ['models', 'enums', 'outputs', 'inputs'],
  relationResolvers: ['models', 'enums', 'inputs'],
  inputs: ['enums'],
  outputs: ['enums'],
}

export function getBlocksToEmit(emitOnly: EmitBlockKind[] | undefined): EmitBlockKind[] {
  if (!emitOnly) {
    return ALL_EMIT_BLOCK_KINDS
  }

  const blocks = new Set<EmitBlockKind>()
  for (const block of emitOnly) {
    blocks.add(block)
    const dependencies = BLOCKS_DEPENDENCIES_MAP[block]
    for (const dependency of dependencies) {
      blocks.add(dependency)
    }
  }

  return Array.from(blocks.values())
}

export interface ExternalGeneratorOptions {
  emitDMMF?: boolean
  emitTranspiledCode?: boolean
  simpleResolvers?: boolean
  useOriginalMapping?: boolean
  useUncheckedScalarInputs?: boolean
  emitIdAsIDType?: boolean
  emitOnly?: EmitBlockKind[]
  customPrismaImportPath?: string
  contextPrismaKey?: string
}

export interface InternalGeneratorOptions {
  outputDirPath: string
  relativePrismaOutputPath: string
  absolutePrismaOutputPath?: string
}

export interface GeneratorOptions extends Omit<ExternalGeneratorOptions, 'emitOnly' | 'contextPrismaKey'>, InternalGeneratorOptions {
  blocksToEmit: EmitBlockKind[]
  contextPrismaKey: string
}
