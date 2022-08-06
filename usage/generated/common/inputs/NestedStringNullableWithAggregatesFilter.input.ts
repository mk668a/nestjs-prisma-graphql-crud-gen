import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedIntNullableFilter } from "./NestedIntNullableFilter.input";
import { NestedStringNullableFilter } from "./NestedStringNullableFilter.input";

@NestJsGraphQL.InputType('NestedStringNullableWithAggregatesFilter', { isAbstract: true })
export class NestedStringNullableWithAggregatesFilter {
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

  @NestJsGraphQL.Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: NestedStringNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: NestedStringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: NestedStringNullableFilter | undefined;
}
