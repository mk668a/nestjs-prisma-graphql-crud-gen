import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType('AffectedRowsOutput')
export class AffectedRowsOutput {
  @Field(() => Int, { nullable: false })
  count!: number
}
