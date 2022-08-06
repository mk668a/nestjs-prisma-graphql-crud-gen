import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('NestedBoolFilter', { isAbstract: true })
export class NestedBoolFilter {
  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @NestJsGraphQL.Field(() => NestedBoolFilter, { nullable: true })
  not?: NestedBoolFilter | undefined;
}
