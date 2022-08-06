import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { StringNullableFilter } from "../../common/inputs/StringNullableFilter.input";
import { PostListRelationFilter } from "../../post/inputs/PostListRelationFilter.input";

@NestJsGraphQL.InputType('UsersWhereInput', { isAbstract: true })
export class UsersWhereInput {
  @NestJsGraphQL.Field(() => [UsersWhereInput], { nullable: true })
  AND?: UsersWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [UsersWhereInput], { nullable: true })
  OR?: UsersWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [UsersWhereInput], { nullable: true })
  NOT?: UsersWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  first_name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  last_name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  email?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  gender?: StringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => PostListRelationFilter, { nullable: true })
  posts?: PostListRelationFilter | undefined;
}
