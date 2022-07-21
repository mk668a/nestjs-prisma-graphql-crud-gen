import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder } from "../../common/enums";
import { PostCountOrderByAggregateInput } from "../../post/inputs/PostCountOrderByAggregateInput.input";
import { PostMaxOrderByAggregateInput } from "../../post/inputs/PostMaxOrderByAggregateInput.input";
import { PostMinOrderByAggregateInput } from "../../post/inputs/PostMinOrderByAggregateInput.input";

@NestJsGraphQL.InputType('PostOrderByWithAggregationInput', { isAbstract: true })
export class PostOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  published?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  content?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  authorId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => PostCountOrderByAggregateInput, { nullable: true })
  _count?: PostCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => PostMaxOrderByAggregateInput, { nullable: true })
  _max?: PostMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => PostMinOrderByAggregateInput, { nullable: true })
  _min?: PostMinOrderByAggregateInput | undefined;
}
