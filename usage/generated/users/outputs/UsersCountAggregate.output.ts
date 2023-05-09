import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('UsersCountAggregate', { isAbstract: true })
export class UsersCountAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  first_name!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  last_name!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  email!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  gender!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  created_at!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  updated_at!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  role!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  _all!: number;
}
