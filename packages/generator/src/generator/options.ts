export type EmitBlockKind = 'enums' | 'models' | 'crud' | 'inputs' | 'outputs'

export const ALL_EMIT_BLOCK_KINDS: EmitBlockKind[] = ['enums', 'models', 'crud', 'inputs', 'outputs']

// Legacy kind names from v1 — silently mapped for backwards-compatible emitOnly
const LEGACY_BLOCK_ALIAS: Record<string, EmitBlockKind | undefined> = {
  crudResolvers: 'crud',
  relationResolvers: 'crud',
}

export const BLOCKS_DEPENDENCIES_MAP: Record<EmitBlockKind, EmitBlockKind[]> = {
  enums: [],
  models: ['enums'],
  crud: ['models', 'enums', 'outputs', 'inputs'],
  inputs: ['enums'],
  outputs: ['enums'],
}

export function getBlocksToEmit(emitOnly: string[] | undefined): EmitBlockKind[] {
  if (!emitOnly) return ALL_EMIT_BLOCK_KINDS
  const normalized: EmitBlockKind[] = []
  for (const raw of emitOnly) {
    const mapped = (LEGACY_BLOCK_ALIAS[raw] ?? raw) as EmitBlockKind
    if (!ALL_EMIT_BLOCK_KINDS.includes(mapped)) {
      throw new Error(`Unknown emitOnly block "${raw}". Allowed: ${ALL_EMIT_BLOCK_KINDS.join(', ')}`)
    }
    normalized.push(mapped)
  }
  const blocks = new Set<EmitBlockKind>()
  for (const block of normalized) {
    blocks.add(block)
    for (const dep of BLOCKS_DEPENDENCIES_MAP[block]) blocks.add(dep)
  }
  return Array.from(blocks)
}

export interface ExternalGeneratorOptions {
  /** Emit class-validator decorators (@MinLength, @IsEmail, ...) on input fields. */
  emitValidation?: boolean
  /** Emit per-relation DataLoader-backed @ResolveField bindings. */
  emitDataLoader?: boolean
  /** Emit Apollo Federation v2 @key directives on entity types. */
  emitFederation?: boolean
  /** Singularize plural model names in GraphQL surface (e.g. Users -> User). Default: true. */
  useNormalizedNaming?: boolean
  /** Subset of blocks to emit. */
  emitOnly?: EmitBlockKind[]
  /** Import path for the runtime package. Default: 'nestjs-prisma-graphql-crud-gen-runtime'. */
  runtimeImportPath?: string
}

export interface InternalGeneratorOptions {
  outputDirPath: string
  relativePrismaOutputPath: string
  absolutePrismaOutputPath?: string
}

export interface GeneratorOptions extends Omit<ExternalGeneratorOptions, 'emitOnly'>, InternalGeneratorOptions {
  blocksToEmit: EmitBlockKind[]
  emitValidation: boolean
  emitDataLoader: boolean
  emitFederation: boolean
  useNormalizedNaming: boolean
  runtimeImportPath: string
  // Legacy fields kept for internal compatibility with existing generators
  // (these always evaluate to their defaults — no longer surfaced as user options).
  emitDMMF?: boolean
  emitTranspiledCode?: boolean
  simpleResolvers?: boolean
  useOriginalMapping?: boolean
  useUncheckedScalarInputs?: boolean
  emitIdAsIDType?: boolean
  customPrismaImportPath?: string
  contextPrismaKey: string
}
