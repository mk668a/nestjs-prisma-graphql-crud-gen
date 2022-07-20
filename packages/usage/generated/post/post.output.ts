import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType(() => AggregatePost, { isAbstract: true })
export class AggregatePost {
  @NestJsGraphQL.Field(() => PostCountAggregate, { nullable: true })
  _count!: PostCountAggregate | null;

  @NestJsGraphQL.Field(() => PostMinAggregate, { nullable: true })
  _min!: PostMinAggregate | null;

  @NestJsGraphQL.Field(() => PostMaxAggregate, { nullable: true })
  _max!: PostMaxAggregate | null;
}

@NestJsGraphQL.ObjectType(() => PostGroupBy, { isAbstract: true })
export class PostGroupBy {
  @NestJsGraphQL.Field(() => String)
  id!: string;

  @NestJsGraphQL.Field(() => Date)
  createdAt!: Date;

  @NestJsGraphQL.Field(() => Date)
  updatedAt!: Date;

  @NestJsGraphQL.Field(() => Boolean)
  published!: boolean;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  authorId!: string | null;

  @NestJsGraphQL.Field(() => PostCountAggregate, { nullable: true })
  _count!: PostCountAggregate | null;

  @NestJsGraphQL.Field(() => PostMinAggregate, { nullable: true })
  _min!: PostMinAggregate | null;

  @NestJsGraphQL.Field(() => PostMaxAggregate, { nullable: true })
  _max!: PostMaxAggregate | null;
}

@NestJsGraphQL.ObjectType(() => PostCountAggregate, { isAbstract: true })
export class PostCountAggregate {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  id!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  createdAt!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  updatedAt!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  published!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  title!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  content!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  authorId!: number;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  _all!: number;
}

@NestJsGraphQL.ObjectType(() => PostMinAggregate, { isAbstract: true })
export class PostMinAggregate {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt!: Date | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt!: Date | null;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  published!: boolean | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  title!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  authorId!: string | null;
}

@NestJsGraphQL.ObjectType(() => PostMaxAggregate, { isAbstract: true })
export class PostMaxAggregate {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt!: Date | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt!: Date | null;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  published!: boolean | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  title!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  authorId!: string | null;
}
