import * as NestJsGraphQL from "@nestjs/graphql";

export enum UsersScalarFieldEnum {
  id = "id",
  first_name = "first_name",
  last_name = "last_name",
  email = "email",
  gender = "gender",
  created_at = "created_at",
  updated_at = "updated_at"
}
NestJsGraphQL.registerEnumType(UsersScalarFieldEnum, {
  name: "UsersScalarFieldEnum",
  description: undefined,
});

export enum PostScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  published = "published",
  title = "title",
  content = "content",
  authorId = "authorId"
}
NestJsGraphQL.registerEnumType(PostScalarFieldEnum, {
  name: "PostScalarFieldEnum",
  description: undefined,
});

export enum SortOrder {
  asc = "asc",
  desc = "desc"
}
NestJsGraphQL.registerEnumType(SortOrder, {
  name: "SortOrder",
  description: undefined,
});

export enum QueryMode {
  "default" = "default",
  insensitive = "insensitive"
}
NestJsGraphQL.registerEnumType(QueryMode, {
  name: "QueryMode",
  description: undefined,
});
