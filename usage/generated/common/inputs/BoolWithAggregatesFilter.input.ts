import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedBoolFilter } from "./NestedBoolFilter.input";
import { NestedBoolWithAggregatesFilter } from "./NestedBoolWithAggregatesFilter.input";
import { NestedIntFilter } from "./NestedIntFilter.input";

@NestJsGraphQL.InputType('BoolWithAggregatesFilter', { isAbstract: true })
export class BoolWithAggregatesFilter {
  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @NestJsGraphQL.Field(() => NestedBoolWithAggregatesFilter, { nullable: true })
  not?: NestedBoolWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedBoolFilter, { nullable: true })
  _min?: NestedBoolFilter | undefined;

  @NestJsGraphQL.Field(() => NestedBoolFilter, { nullable: true })
  _max?: NestedBoolFilter | undefined;
}
