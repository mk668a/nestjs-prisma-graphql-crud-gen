import * as NestJsGraphQL from "@nestjs/graphql";

export enum Language {
  Typescript = "Typescript",
  Javascript = "Javascript",
  Rust = "Rust",
  Go = "Go",
  Python = "Python",
  Cpp = "Cpp"
}
NestJsGraphQL.registerEnumType(Language, {
  name: "Language",
  description: undefined,
});
