import * as NestJsGraphQL from "@nestjs/graphql";
import { QueryMode } from "../../common/enums";
import { NestedStringFilter } from "./NestedStringFilter.input";

@NestJsGraphQL.InputType('StringFilter', { isAbstract: true })
export class StringFilter {
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

  @NestJsGraphQL.Field(() => NestedStringFilter, { nullable: true })
  not?: NestedStringFilter | undefined;
}
