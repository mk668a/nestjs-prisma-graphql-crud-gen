# Contributing

Thanks for considering a contribution.

## Repo layout

```
packages/
  generator/   # the prisma generator plugin (entry: src/index.ts)
  runtime/     # nestjs-prisma-graphql-crud-gen-runtime — base service, filters, DataLoader, error mapping
usage/         # demo project + sample schema (also exercises end-to-end generation)
```

## Setup

```shell
cd packages/runtime && yarn install && yarn build
cd ../generator   && yarn install && yarn build
cd ../../usage    && yarn install --ignore-engines
```

## Snapshot tests

```shell
cd packages/generator
yarn test          # run
yarn test -u       # update snapshots after intentional output changes
```

Fixtures live at `packages/generator/__tests__/fixtures/*.prisma`. Each fixture exercises a different concern:

- `basic.prisma` — minimum viable model
- `directives.prisma` — `@HideField`, `@SoftDelete`, `@ReadOnly`, `@Crud(only)`
- `complex.prisma` — repro for issue #142: self-relation, composite key, implicit m:n, dual-relation between same two models

Adding a new directive or generator option? Add a fixture and a snapshot — that's how the project keeps the surface stable across Prisma DMMF shape shifts.

## Reproducing #142-style bugs

Generation runs with verbose step logs via:

```shell
DEBUG=nestjs-prisma-crud-gen npx prisma generate
```

This prints which step + which model is currently processing, so silent failures are no longer possible.

## Bumping Prisma

The DMMF type shape drifts between Prisma versions. Absorb diffs in **one place**: `packages/generator/src/generator/dmmf/transform.ts`. If you find yourself casting in multiple generators, add a transform helper instead.

## Releasing (local)

Releases are published locally from the maintainer's machine — there's no CI release pipeline.

```shell
# 1. Bump versions in both package.json files (keep them in sync)
#    e.g. 2.0.0 -> 2.0.1
$EDITOR packages/runtime/package.json packages/generator/package.json

# 2. Log in to npm (one-time, persists)
npm login

# 3. Dry-run first to confirm both packages would publish
./scripts/publish.sh --dry-run

# 4. Real publish — runtime first, then generator (the helper handles order)
./scripts/publish.sh

# 5. Tag and push
git tag v2.0.1 && git push --tags
```

The helper script (`scripts/publish.sh`) refuses to publish from a dirty working tree (override with `--allow-dirty` if you really must). It runs build + tests for the generator before publishing, and publishes the runtime first so the generator's emitted imports resolve at user end.

Pre-release tags work too:

```shell
# version: 2.1.0-beta.0
./scripts/publish.sh --tag next
```
