import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedDateTimeFilter } from "./NestedDateTimeFilter.input";
import { NestedDateTimeWithAggregatesFilter } from "./NestedDateTimeWithAggregatesFilter.input";
import { NestedIntFilter } from "./NestedIntFilter.input";

@NestJsGraphQL.InputType('DateTimeWithAggregatesFilter', { isAbstract: true })
export class DateTimeWithAggregatesFilter {
  @NestJsGraphQL.Field(() => Date, { nullable: true })
  equals?: Date | undefined;

  @NestJsGraphQL.Field(() => [Date], { nullable: true })
  in?: Date[] | undefined;

  @NestJsGraphQL.Field(() => [Date], { nullable: true })
  notIn?: Date[] | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  lt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  lte?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  gt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  gte?: Date | undefined;

  @NestJsGraphQL.Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: NestedDateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedDateTimeFilter, { nullable: true })
  _min?: NestedDateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => NestedDateTimeFilter, { nullable: true })
  _max?: NestedDateTimeFilter | undefined;
}
