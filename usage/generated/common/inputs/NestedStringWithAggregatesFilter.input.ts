import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedIntFilter } from "./NestedIntFilter.input";
import { NestedStringFilter } from "./NestedStringFilter.input";

@NestJsGraphQL.InputType('NestedStringWithAggregatesFilter', { isAbstract: true })
export class NestedStringWithAggregatesFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: string[] | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: string[] | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  contains?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  startsWith?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  endsWith?: string | undefined;

  @NestJsGraphQL.Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: NestedStringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedStringFilter, { nullable: true })
  _min?: NestedStringFilter | undefined;

  @NestJsGraphQL.Field(() => NestedStringFilter, { nullable: true })
  _max?: NestedStringFilter | undefined;
}
