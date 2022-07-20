import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.ObjectType('AffectedRowsOutput', { isAbstract: true })
export class AffectedRowsOutput {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int)
  count!: number;
}
