import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeWithAggregatesFilter, StringNullableWithAggregatesFilter, StringWithAggregatesFilter } from "../../common/inputs";

@NestJsGraphQL.InputType('UsersScalarWhereWithAggregatesInput', { isAbstract: true })
export class UsersScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  AND?: UsersScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  OR?: UsersScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: UsersScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  first_name?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  last_name?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  gender?: StringNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter | undefined;
}
