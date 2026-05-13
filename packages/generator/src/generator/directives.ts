/**
 * Triple-slash directive parser. Recognizes documented attributes on Prisma
 * fields / models and turns them into structured directive info that
 * downstream generators can consume.
 *
 * Supported:
 *   /// @HideField                          field-level: skip in both input + output
 *   /// @HideField({ input, output })       field-level: skip in matching surfaces
 *   /// @ReadOnly                           field-level: skip in mutation inputs
 *   /// @SoftDelete                         model-level: delete becomes timestamp update
 *   /// @Crud(only: ["findMany", ...])      model-level: emit only listed operations
 *   /// @Crud(except: ["delete", ...])      model-level: emit all but listed
 *   /// @Validate({ minLength: 3, ... })    field-level: class-validator decorators
 *   /// @Auth(roles: ["admin"])             model-level: @UseGuards + @Roles
 *   /// @Computed("fieldName: String")      model-level: emit field resolver stub
 */

export type CrudOperation =
  | 'findFirst'
  | 'findUnique'
  | 'findMany'
  | 'groupBy'
  | 'aggregate'
  | 'create'
  | 'createMany'
  | 'update'
  | 'updateMany'
  | 'upsert'
  | 'delete'
  | 'deleteMany'

export const ALL_CRUD_OPERATIONS: CrudOperation[] = [
  'findFirst',
  'findUnique',
  'findMany',
  'groupBy',
  'aggregate',
  'create',
  'createMany',
  'update',
  'updateMany',
  'upsert',
  'delete',
  'deleteMany',
]

export interface FieldDirectives {
  hideField?: { input: boolean; output: boolean }
  readOnly?: boolean
  validate?: Record<string, unknown>
}

export interface ModelDirectives {
  softDelete?: { field: string }
  crud?: { operations: CrudOperation[] }
  auth?: { roles: string[] }
  computed?: Array<{ name: string; type: string }>
}

// Prisma strips the `///` prefix from documentation strings, so we look for
// directives anywhere they appear, optionally preceded by whitespace.
const DIRECTIVE_RE = /(?:^|\\n|\s)@(\w+)(?:\((.*?)\))?/g

function parseInner(inner: string | undefined): unknown {
  if (!inner) return undefined
  const trimmed = inner.trim()
  // bare-string form: /// @Computed("name: String")
  if (trimmed.startsWith('"') || trimmed.startsWith("'")) {
    try {
      return JSON.parse(trimmed.replace(/'/g, '"'))
    } catch {
      return trimmed.slice(1, -1)
    }
  }
  // object form: /// @HideField({ input: true })
  if (trimmed.startsWith('{')) {
    try {
      // tolerate single quotes + bare keys by normalizing
      const normalized = trimmed
        .replace(/'/g, '"')
        .replace(/([{,]\s*)(\w+)\s*:/g, '$1"$2":')
      return JSON.parse(normalized)
    } catch {
      return {}
    }
  }
  // key: value pairs e.g. roles: ["admin"]
  // wrap into an object literal and reparse
  return parseInner(`{${trimmed}}`)
}

export function parseFieldDirectives(documentation: string | undefined): FieldDirectives {
  if (!documentation) return {}
  const out: FieldDirectives = {}
  for (const match of documentation.matchAll(DIRECTIVE_RE)) {
    const name = match[1]
    const inner = parseInner(match[2])
    switch (name) {
      case 'HideField': {
        const obj = (inner as { input?: boolean; output?: boolean } | undefined) ?? {}
        out.hideField = {
          input: obj.input !== false,
          output: obj.output !== false,
        }
        break
      }
      case 'ReadOnly':
        out.readOnly = true
        break
      case 'Validate':
        out.validate = (inner as Record<string, unknown>) ?? {}
        break
    }
  }
  return out
}

export function parseModelDirectives(documentation: string | undefined): ModelDirectives {
  if (!documentation) return {}
  const out: ModelDirectives = {}
  for (const match of documentation.matchAll(DIRECTIVE_RE)) {
    const name = match[1]
    const inner = parseInner(match[2])
    switch (name) {
      case 'SoftDelete': {
        const obj = (inner as { field?: string } | undefined) ?? {}
        out.softDelete = { field: obj.field ?? 'deletedAt' }
        break
      }
      case 'Crud': {
        const obj = (inner as { only?: CrudOperation[]; except?: CrudOperation[] } | undefined) ?? {}
        let ops = [...ALL_CRUD_OPERATIONS]
        if (obj.only) ops = ops.filter((op) => obj.only!.includes(op))
        if (obj.except) ops = ops.filter((op) => !obj.except!.includes(op))
        out.crud = { operations: ops }
        break
      }
      case 'Auth': {
        const obj = (inner as { roles?: string[] } | undefined) ?? {}
        out.auth = { roles: obj.roles ?? [] }
        break
      }
      case 'Computed': {
        // value form: "fieldName: String" — also support multiple
        const value = typeof inner === 'string' ? inner : ''
        if (value) {
          const [name, type] = value.split(':').map((s) => s.trim())
          out.computed = [...(out.computed ?? []), { name, type }]
        }
        break
      }
    }
  }
  return out
}

/** class-validator decorator strings to emit for a parsed @Validate spec. */
export function validateRulesToDecoratorCalls(rules: Record<string, unknown> | undefined): string[] {
  if (!rules) return []
  const out: string[] = []
  for (const [k, v] of Object.entries(rules)) {
    switch (k) {
      case 'minLength':
        out.push(`MinLength(${v})`)
        break
      case 'maxLength':
        out.push(`MaxLength(${v})`)
        break
      case 'min':
        out.push(`Min(${v})`)
        break
      case 'max':
        out.push(`Max(${v})`)
        break
      case 'isEmail':
        if (v) out.push(`IsEmail()`)
        break
      case 'isUrl':
        if (v) out.push(`IsUrl()`)
        break
      case 'isUUID':
        if (v) out.push(`IsUUID()`)
        break
      case 'matches':
        out.push(`Matches(${JSON.stringify(v)})`)
        break
    }
  }
  return out
}
