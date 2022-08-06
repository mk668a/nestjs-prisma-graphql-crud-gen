import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('UsersCount', { isAbstract: true })
export class UsersCount {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  posts!: number;
}
