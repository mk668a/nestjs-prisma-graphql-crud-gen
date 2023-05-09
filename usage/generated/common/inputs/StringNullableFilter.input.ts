import * as NestJsGraphQL from "@nestjs/graphql";
import { QueryMode } from "../../common/enums";
import { NestedStringNullableFilter } from "./NestedStringNullableFilter.input";

@NestJsGraphQL.InputType('StringNullableFilter', { isAbstract: true })
export class StringNullableFilter {
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

  @NestJsGraphQL.Field(() => QueryMode, { nullable: true })
  mode?: "default" | "insensitive" | undefined;

  @NestJsGraphQL.Field(() => NestedStringNullableFilter, { nullable: true })
  not?: NestedStringNullableFilter | undefined;
}
