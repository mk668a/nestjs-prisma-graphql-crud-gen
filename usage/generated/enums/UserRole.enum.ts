import * as NestJsGraphQL from "@nestjs/graphql";

export enum UserRole {
  ADMIN = "ADMIN",
  AUTHOR = "AUTHOR"
}
NestJsGraphQL.registerEnumType(UserRole, {
  name: "UserRole",
  description: undefined,
});
