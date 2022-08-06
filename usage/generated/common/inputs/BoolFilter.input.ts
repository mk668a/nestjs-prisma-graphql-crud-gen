import * as NestJsGraphQL from "@nestjs/graphql";
import { NestedBoolFilter } from "./NestedBoolFilter.input";

@NestJsGraphQL.InputType('BoolFilter', { isAbstract: true })
export class BoolFilter {
  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @NestJsGraphQL.Field(() => NestedBoolFilter, { nullable: true })
  not?: NestedBoolFilter | undefined;
}
