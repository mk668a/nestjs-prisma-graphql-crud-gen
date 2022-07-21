import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('PostCreateManyInput', { isAbstract: true })
export class PostCreateManyInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Boolean)
  published!: boolean;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  authorId?: string | undefined;
}
