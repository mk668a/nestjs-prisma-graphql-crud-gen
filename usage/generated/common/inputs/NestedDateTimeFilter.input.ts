import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('NestedDateTimeFilter', { isAbstract: true })
export class NestedDateTimeFilter {
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

  @NestJsGraphQL.Field(() => NestedDateTimeFilter, { nullable: true })
  not?: NestedDateTimeFilter | undefined;
}
