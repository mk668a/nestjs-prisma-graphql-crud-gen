import * as NestJsGraphQL from "@nestjs/graphql";
import { BoolFilter } from "../../common/inputs/BoolFilter.input";
import { DateTimeFilter } from "../../common/inputs/DateTimeFilter.input";
import { StringFilter } from "../../common/inputs/StringFilter.input";
import { StringNullableFilter } from "../../common/inputs/StringNullableFilter.input";
import { UsersRelationFilter } from "../../users/inputs/UsersRelationFilter.input";

@NestJsGraphQL.InputType('PostWhereInput', { isAbstract: true })
export class PostWhereInput {
  @NestJsGraphQL.Field(() => [PostWhereInput], { nullable: true })
  AND?: PostWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostWhereInput], { nullable: true })
  OR?: PostWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostWhereInput], { nullable: true })
  NOT?: PostWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => BoolFilter, { nullable: true })
  published?: BoolFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  content?: StringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => UsersRelationFilter, { nullable: true })
  author?: UsersRelationFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  authorId?: StringNullableFilter | undefined;
}
