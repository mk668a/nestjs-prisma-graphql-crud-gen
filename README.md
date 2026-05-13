<div align="center">
    <img src="./icon.png" alt="icon" height="128" width="128">
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/nestjs-prisma-graphql-crud-gen"><img src="https://img.shields.io/npm/v/nestjs-prisma-graphql-crud-gen.svg?style=flat" /></a>
<a href="https://github.com/mk668a/nestjs-prisma-graphql-crud-gen/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" /></a>
</div>

# NestJS Prisma GraphQL CRUD Generator (v2)

Schema-driven NestJS + GraphQL CRUD bindings for Prisma. Generates a thin per-model resolver / service / module that delegates heavy lifting to a shared runtime package, so updates ship without forcing you to regenerate everything.

## Why v2?

v1 generated ~10+ files per model (resolver, service, module, args, inputs, outputs, model, …). v2 collapses resolver+service+module into a single `<model>.crud.ts` and moves shared behavior (error mapping, soft-delete, DataLoader, common filters) into [`nestjs-prisma-graphql-crud-gen-runtime`](./packages/runtime). The result:

- ~80% fewer generated files
- Library updates land via runtime bumps — no re-generation required for bug fixes
- Cross-cutting concerns are correct *every time* (validation, error mapping, soft-delete) — the deterministic edge over hand-rolled or AI-generated scaffolds

## Requirements

- Node.js **>= 20**
- Prisma **>= 7.x**
- NestJS **>= 10**, `@nestjs/graphql` **>= 12**

## Quickstart

```shell
yarn add nestjs-prisma-graphql-crud-gen nestjs-prisma-graphql-crud-gen-runtime
```

In `schema.prisma`:

```prisma
generator nestjs_graphql_crud {
  provider = "nestjs-prisma-graphql-crud-gen"
  output   = "../generated"
}
```

In your NestJS root module, provide `PRISMA_CLIENT` for the runtime to consume:

```ts
import { PRISMA_CLIENT } from 'nestjs-prisma-graphql-crud-gen-runtime'
import { PrismaService } from './prisma.service' // your own PrismaService

@Module({
  providers: [PrismaService, { provide: PRISMA_CLIENT, useExisting: PrismaService }],
  exports: [PRISMA_CLIENT],
})
export class PrismaModule {}
```

Then run:

```shell
npx prisma generate
```

## Generator options

Set on the generator block in `schema.prisma`:

```prisma
generator nestjs_graphql_crud {
  provider              = "nestjs-prisma-graphql-crud-gen"
  output                = "../generated"
  useNormalizedNaming   = "true"      # default; "Users" model -> GraphQL "User"
  emitValidation        = "false"     # class-validator decorators on inputs
  emitDataLoader        = "false"     # per-relation DataLoader N+1 helpers
  emitFederation        = "false"     # Apollo Federation v2 @key directives
  emitOnly              = "models,crud,inputs,outputs,enums"  # subset to emit
  runtimeImportPath     = "nestjs-prisma-graphql-crud-gen-runtime"
}
```

## Triple-slash directives

Annotate the schema to opt into v2 behaviors. Place them on the line above the field or model.

| Directive | Target | Effect |
|---|---|---|
| `/// @HideField` | field | Hide field from both GraphQL input and output |
| `/// @HideField({ input: true, output: false })` | field | Selective hiding |
| `/// @ReadOnly` | field | Skip in Create / Update input types |
| `/// @SoftDelete` | model | `delete` -> `update({ deletedAt: now() })`; find queries auto-filter `deletedAt IS NULL` |
| `/// @SoftDelete({ field: "archivedAt" })` | model | Use a non-default soft-delete field |
| `/// @Crud(only: ["findMany", "findUnique"])` | model | Emit only the listed CRUD operations |
| `/// @Crud(except: ["delete", "deleteMany"])` | model | Emit all CRUD ops except listed |
| `/// @Validate({ minLength: 3, isEmail: true })` | field | class-validator decorators on inputs |
| `/// @Auth(roles: ["admin"])` | model | Emit `@UseGuards` + `@Roles()` on resolver |

Example:

```prisma
/// @SoftDelete
model User {
  id        String   @id @default(cuid())
  /// @HideField({ output: true })
  password  String
  /// @Validate({ isEmail: true })
  email     String   @unique
  /// @ReadOnly
  createdAt DateTime @default(now())
  deletedAt DateTime?
}
```

## Generated layout

For a `model Users { ... }` (note plural in Prisma), with `useNormalizedNaming: true` (the default):

```
generated/
├── common/
│   ├── inputs/        # Prisma-generated common inputs (StringFilter, ...)
│   └── outputs/       # AffectedRowsOutput, etc.
├── enums/
├── models/
│   └── user.model.ts  # @ObjectType('User')
└── user/
    ├── user.args.ts   # FindFirstUserArgs, CreateOneUserArgs, ...
    ├── user.crud.ts   # UserResolver + UserService + UserModule
    ├── inputs/
    └── outputs/
```

`prisma.users` (plural) is still used for the Prisma client delegate call inside the service. Only the GraphQL surface is singularized.

## Migration from v1

See [`MIGRATION.md`](./MIGRATION.md).

## Sample project

See [`usage/`](./usage) in this repository, and [`nestjs-graphql-starter`](https://github.com/mk668a/nestjs-graphql-starter).

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md). The repo uses Jest snapshot tests under `packages/generator/__tests__/`.

## License

MIT
