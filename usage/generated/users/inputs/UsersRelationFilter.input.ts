import * as NestJsGraphQL from "@nestjs/graphql";
import { UsersWhereInput } from "../../users/inputs/UsersWhereInput.input";

@NestJsGraphQL.InputType('UsersRelationFilter', { isAbstract: true })
export class UsersRelationFilter {
  @NestJsGraphQL.Field(() => UsersWhereInput, { nullable: true })
  is?: UsersWhereInput | undefined;

  @NestJsGraphQL.Field(() => UsersWhereInput, { nullable: true })
  isNot?: UsersWhereInput | undefined;
}
