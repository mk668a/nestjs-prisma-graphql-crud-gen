import * as NestJsGraphQL from "@nestjs/graphql";
import { PostCountAggregate } from "./PostCountAggregate.output";
import { PostMaxAggregate } from "./PostMaxAggregate.output";
import { PostMinAggregate } from "./PostMinAggregate.output";

@NestJsGraphQL.ObjectType('AggregatePost', { isAbstract: true })
export class AggregatePost {
  @NestJsGraphQL.Field(() => PostCountAggregate, { nullable: true })
  _count!: PostCountAggregate | null;

  @NestJsGraphQL.Field(() => PostMinAggregate, { nullable: true })
  _min!: PostMinAggregate | null;

  @NestJsGraphQL.Field(() => PostMaxAggregate, { nullable: true })
  _max!: PostMaxAggregate | null;
}
