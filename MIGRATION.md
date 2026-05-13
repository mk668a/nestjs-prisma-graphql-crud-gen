# Migrating from v1 to v2

v2 is a rewrite of the generator's output surface. Plan to spend ~30 minutes on the migration; the high-impact step is provisioning the new runtime package and removing custom PrismaService coupling.

## Breaking changes at a glance

| Concern | v1 | v2 |
|---|---|---|
| Prisma | 4.x pinned | **>= 7.x** (datasource `url` moved to `prisma.config.ts`) |
| Node | >= 14 | **>= 20** |
| TypeScript | 4.7 | **>= 5.4** |
| Generated files per model | resolver + service + module (3 files) | **single `<model>.crud.ts`** |
| Shared filters / outputs | `generated/common/*` (also still generated) | additionally exported from runtime |
| PrismaService dependency | hardcoded `../../prisma.service` import | **`PRISMA_CLIENT` DI token** |
| Model GraphQL naming | original (e.g. `Users`) | **singularized by default** (`User`) — disable with `useNormalizedNaming = "false"` |
| `emitOnly` block names | `crudResolvers`, `relationResolvers` | **`crud`** (legacy names auto-mapped) |

## Removed generator options

The following v1 options no longer exist (most were never wired through; the rest are replaced by directives):

- `simpleResolvers`
- `useOriginalMapping` → use `useNormalizedNaming = "false"`
- `useUncheckedScalarInputs`
- `emitIdAsIDType`
- `emitTranspiledCode`
- `customPrismaImportPath` → use `PRISMA_CLIENT` token instead
- `contextPrismaKey`

## New generator options

- `emitValidation` — class-validator decorators on inputs
- `emitDataLoader` — per-relation DataLoader N+1 helpers
- `emitFederation` — Apollo Federation v2 `@key` on entity types
- `useNormalizedNaming` (default `true`)
- `runtimeImportPath` (default `nestjs-prisma-graphql-crud-gen-runtime`)

## Step-by-step

### 1. Bump dependencies

```jsonc
{
  "dependencies": {
    "nestjs-prisma-graphql-crud-gen": "^2.0.0",
    "nestjs-prisma-graphql-crud-gen-runtime": "^2.0.0",
    "@nestjs/common": "^10",
    "@nestjs/graphql": "^12",
    "@prisma/client": "^7",
    "class-validator": "^0.14",
    "dataloader": "^2"
  },
  "devDependencies": {
    "prisma": "^7",
    "typescript": "^5"
  },
  "engines": { "node": ">=20" }
}
```

### 2. Move the Prisma connection URL out of `schema.prisma`

Prisma 7 dropped `datasource.url` from the schema. Create a `prisma.config.ts` at the project root:

```ts
import { defineConfig } from 'prisma/config'

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: { url: process.env.DATABASE_URL },
})
```

### 3. Provide `PRISMA_CLIENT`

Replace hardcoded `PrismaService` imports with the runtime DI token:

```ts
// before (v1) — the generator referenced ../../prisma.service directly
import { PrismaService } from '../../prisma.service'

// after (v2) — provide once at the module level
import { PRISMA_CLIENT } from 'nestjs-prisma-graphql-crud-gen-runtime'

@Module({
  providers: [PrismaService, { provide: PRISMA_CLIENT, useExisting: PrismaService }],
  exports: [PRISMA_CLIENT],
})
export class PrismaModule {}
```

### 4. Replace v1 module imports

In v1 you imported per-model modules like `UsersModule`. In v2 those still exist, but if `useNormalizedNaming` is on (default) the class name follows the singular form: `UserModule`, `UserService`, `UserResolver`.

If you don't want this, set `useNormalizedNaming = "false"` in the generator block.

### 5. Re-generate

```shell
rm -rf generated
npx prisma generate
```

### 6. (Optional) Adopt directives

If you previously hand-wrote `@UseGuards`, soft-delete logic, or `@HideField` calls in the generated tree (which would have been wiped out on regenerate), now express them on the schema:

```prisma
/// @SoftDelete
/// @Auth(roles: ["admin"])
model AdminAuditLog {
  id        String   @id
  /// @HideField
  rawPayload Json
  deletedAt DateTime?
}
```

## Compatibility notes

- Generated output trees in v1 used the plural model directory (e.g. `users/`). v2 normalizes to the singular (`user/`). Update any hand-written code that imported from `generated/users/...` to `generated/user/...`.
- `Prisma.UsersFindManyArgs` (Prisma client types) is unchanged — only the GraphQL surface renames. Prisma client delegate access stays `prisma.users`.
- v1's `simpleResolvers` option was never plumbed through fully; if you depended on it, file an issue with your use case.

## Rollback

If you need to stay on v1 temporarily, pin to `^1.0.4` and `prisma@^4` together. v1 patches will continue on the `v1` branch for security-critical fixes only.
