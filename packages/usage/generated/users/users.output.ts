import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('Users', { isAbstract: true })
export class AggregateUsers {
  @NestJsGraphQL.Field(() => UsersCountAggregate, { nullable: true })
  _count!: UsersCountAggregate | null;

  @NestJsGraphQL.Field(() => UsersMinAggregate, { nullable: true })
  _min!: UsersMinAggregate | null;

  @NestJsGraphQL.Field(() => UsersMaxAggregate, { nullable: true })
  _max!: UsersMaxAggregate | null;
}

@NestJsGraphQL.ObjectType('Users', { isAbstract: true })
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

@NestJsGraphQL.ObjectType('Users', { isAbstract: true })
export class UsersCount {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  posts!: number;
}

@NestJsGraphQL.ObjectType('Users', { isAbstract: true })
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
  _all!: number;
}

@NestJsGraphQL.ObjectType('Users', { isAbstract: true })
export class UsersMinAggregate {
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

@NestJsGraphQL.ObjectType('Users', { isAbstract: true })
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
