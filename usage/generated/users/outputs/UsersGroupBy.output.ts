import * as NestJsGraphQL from "@nestjs/graphql";
import { UsersCountAggregate } from "./UsersCountAggregate.output";
import { UsersMaxAggregate } from "./UsersMaxAggregate.output";
import { UsersMinAggregate } from "./UsersMinAggregate.output";

@NestJsGraphQL.ObjectType('UsersGroupBy', { isAbstract: true })
export class UsersGroupBy {
  @NestJsGraphQL.Field(() => String)
  id!: string;

  @NestJsGraphQL.Field(() => String)
  first_name!: string;

  @NestJsGraphQL.Field(() => String)
  last_name!: string;

  @NestJsGraphQL.Field(() => String)
  email!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gender!: string | null;

  @NestJsGraphQL.Field(() => Date)
  created_at!: Date;

  @NestJsGraphQL.Field(() => Date)
  updated_at!: Date;

  @NestJsGraphQL.Field(() => UsersCountAggregate, { nullable: true })
  _count!: UsersCountAggregate | null;

  @NestJsGraphQL.Field(() => UsersMinAggregate, { nullable: true })
  _min!: UsersMinAggregate | null;

  @NestJsGraphQL.Field(() => UsersMaxAggregate, { nullable: true })
  _max!: UsersMaxAggregate | null;
}
