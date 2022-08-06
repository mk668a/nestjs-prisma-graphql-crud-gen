import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('UsersMaxAggregate', { isAbstract: true })
export class UsersMaxAggregate {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  first_name!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  last_name!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  email!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gender!: string | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  created_at!: Date | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updated_at!: Date | null;
}
