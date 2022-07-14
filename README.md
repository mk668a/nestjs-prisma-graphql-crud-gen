<div>
    <img src="./icon.png" alt="icon" height="128" width="128">
</div>

Generate CRUD resolvers from GraphQL schema with NestJS and Prisma

# Getting Started

1. Install this package in your project using:

```shell
yarn add graphql class-validator
yarn add nestjs-prisma-graphql-crud-gen
```

2. Add the generator to the schema.prisma:

```
generator crudgen {
  provider = "nestjs-prisma-graphql-crud-gen"
  # output = "./generated" This is default path.
}
generator graphql {
  provider = "nestjs-prisma-graphql-crud-gen"
}
```

3. Run the generator

```shell
npx prisma generate
```
