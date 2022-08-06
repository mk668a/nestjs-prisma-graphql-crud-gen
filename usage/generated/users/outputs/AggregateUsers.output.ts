import * as NestJsGraphQL from "@nestjs/graphql";
import { UsersCountAggregate } from "./UsersCountAggregate.output";
import { UsersMaxAggregate } from "./UsersMaxAggregate.output";
import { UsersMinAggregate } from "./UsersMinAggregate.output";

@NestJsGraphQL.ObjectType('AggregateUsers', { isAbstract: true })
export class AggregateUsers {
  @NestJsGraphQL.Field(() => UsersCountAggregate, { nullable: true })
  _count!: UsersCountAggregate | null;

  @NestJsGraphQL.Field(() => UsersMinAggregate, { nullable: true })
  _min!: UsersMinAggregate | null;

  @NestJsGraphQL.Field(() => UsersMaxAggregate, { nullable: true })
  _max!: UsersMaxAggregate | null;
}
