import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('PostWhereUniqueInput', { isAbstract: true })
export class PostWhereUniqueInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;
}
