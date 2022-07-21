import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('UsersWhereUniqueInput', { isAbstract: true })
export class UsersWhereUniqueInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  email?: string | undefined;
}
