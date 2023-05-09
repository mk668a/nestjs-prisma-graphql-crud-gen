import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { UsersCountOrderByAggregateInput } from "../../users/inputs/UsersCountOrderByAggregateInput.input";
import { UsersMaxOrderByAggregateInput } from "../../users/inputs/UsersMaxOrderByAggregateInput.input";
import { UsersMinOrderByAggregateInput } from "../../users/inputs/UsersMinOrderByAggregateInput.input";

@NestJsGraphQL.InputType('UsersOrderByWithAggregationInput', { isAbstract: true })
export class UsersOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  first_name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  last_name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  email?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  gender?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  created_at?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updated_at?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  role?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => UsersCountOrderByAggregateInput, { nullable: true })
  _count?: UsersCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => UsersMaxOrderByAggregateInput, { nullable: true })
  _max?: UsersMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => UsersMinOrderByAggregateInput, { nullable: true })
  _min?: UsersMinOrderByAggregateInput | undefined;
}
