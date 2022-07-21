import * as NestJsGraphQL from "@nestjs/graphql";
import { UsersCreateNestedOneWithoutPostsInput } from "../../users/inputs/UsersCreateNestedOneWithoutPostsInput.input";

@NestJsGraphQL.InputType('PostCreateInput', { isAbstract: true })
export class PostCreateInput {
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

  @NestJsGraphQL.Field(() => UsersCreateNestedOneWithoutPostsInput, { nullable: true })
  author?: UsersCreateNestedOneWithoutPostsInput | undefined;
}
