<div align="center">
    <img src="./icon.png" alt="icon" height="128" width="128">
</div>

# NestJS Prisma Graphql CRUD Generater

Generate CRUD resolvers from GraphQL schema with NestJS and Prisma

# Getting Started

1. Install this package in your project using:

```shell
yarn add nestjs-prisma-graphql-crud-gen
```

2. Add the generator to the schema.prisma:

```
generator custom_generator {
  provider = "nestjs-prisma-graphql-crud-gen"
  output = "../generated"
}
```

3. Run the generator

```shell
npx prisma generate
```

# Output Directory Structure

```
generated/
├── common
│   ├── enums.ts
│   ├── inputs.ts
│   └── outputs.ts
├── enums
│   └── Language.enum.ts
├── models
│   └── users.models.ts
└── users
    ├── users.args.ts
    ├── users.input.ts
    ├── users.module.ts
    ├── users.output.ts
    ├── users.resolver.ts
    └── users.service.ts
```

<a href="https://github.com/mk668a/nestjs-prisma-graphql-crud-gen/tree/main/packages/usage/generated">Sample results here</a>

# Sample Project

<a href="https://github.com/mk668a/nestjs-graphql-starter">nestjs-graphql-starter</a>
