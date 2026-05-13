# Changelog

## 2.0.0 (unreleased)

### Breaking changes

- **Prisma 7 required.** `@prisma/sdk` is replaced by `@prisma/internals`; DMMF types now come from `@prisma/generator-helper`. The `datasource.url` schema property was removed by Prisma 7 — move it to `prisma.config.ts` (see [MIGRATION.md](./MIGRATION.md)).
- **Node 20+ required**, TypeScript 5+, NestJS 10+, `@nestjs/graphql` 12+.
- **New runtime package**: `nestjs-prisma-graphql-crud-gen-runtime`. Generated services now extend `BaseCrudService` from the runtime instead of inlining 12 Prisma calls each.
- **Generated layout changes:**
  - Per-model resolver / service / module collapsed into a single `<model>.crud.ts`.
  - With `useNormalizedNaming = true` (default), plural models like `Users` produce singular GraphQL types (`User`) and singular directory names (`user/`).
  - Hardcoded `import { PrismaService } from '../../prisma.service'` is replaced by `@Inject(PRISMA_CLIENT)`. Provide the runtime token from your `PrismaModule`.
- **Removed generator options**: `simpleResolvers`, `useOriginalMapping`, `useUncheckedScalarInputs`, `emitIdAsIDType`, `emitTranspiledCode`, `customPrismaImportPath`, `contextPrismaKey`. See `MIGRATION.md`.
- **`emitOnly` block names simplified**: `crudResolvers` and `relationResolvers` are merged into `crud` (legacy names continue to map automatically).

### New features

- **Triple-slash directives** (`/// @HideField`, `/// @ReadOnly`, `/// @SoftDelete`, `/// @Crud(only|except)`, `/// @Validate({...})`, `/// @Auth(roles)`).
- **`emitValidation`** — auto-emit `class-validator` decorators on input types from `/// @Validate` and (future) DB constraints.
- **`emitDataLoader`** — per-relation DataLoader-backed `@ResolveField` for N+1 prevention.
- **`emitFederation`** — Apollo Federation v2 `@key` directives on entity types.
- **`useNormalizedNaming`** — singularize plural model names in the GraphQL surface (default on).
- `PRISMA_CLIENT` DI token (resolves issue #89).
- Reproducible Jest snapshot tests under `packages/generator/__tests__/`.

### Bug fixes

- **#142 silent failure on complex schemas.** Replaced `forEach(async ...)` patterns in `generateArgs.ts` that swallowed exceptions; added `try/catch` + DEBUG logging at every generator step.
- **#138 args import path** + **#115 enum path** are resolved by the new `useNormalizedNaming` path discipline; verified via snapshot tests.
- **#43 hide sensitive fields** addressed by `/// @HideField` directive.
- **#89 PrismaService path** addressed by `PRISMA_CLIENT` DI token.
- **#53 CreateMany args** verified in snapshot tests.
- `// @ts-ignore` on the service `groupBy` is removed (Prisma 7's types are correct).

### Infrastructure

- GitHub Actions CI for Node 20/22 matrix with snapshot verification.
- Local publish helper (`scripts/publish.sh`) — releases are cut from the maintainer's machine, no CI release pipeline.
- Bug-report issue template with mandatory `schema.prisma` snippet.

## 1.0.4

- Fixed enum path problem.

## 1.0.3

- Initial public release.
