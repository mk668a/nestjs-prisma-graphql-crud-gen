<div align="center">
    <img src="./icon.png" alt="icon" height="128" width="128">
</div>

<div align="center">
  <a href="https://www.npmjs.com/package/nestjs-prisma-graphql-crud-gen"><img src="https://img.shields.io/npm/v/nestjs-prisma-graphql-crud-gen.svg?style=flat" /></a>
<a href="https://github.com/mk668a/nestjs-prisma-graphql-crud-gen/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" /></a>
</div>

# NestJS Prisma Graphql CRUD Generater

Generate CRUD resolvers from GraphQL schema with NestJS and Prisma

# Getting Started

1. Install this package in your project using:

```shell
yarn add graphql class-validator
yarn add nestjs-prisma-graphql-crud-gen
```

2. Add the generator to the schema.prisma:

```
generator custom_generator {
  provider = "nestjs-prisma-graphql-crud-gen"
  # output = "./generated" This is default path.
}
```

3. Run the generator

```shell
npx prisma generate
```
