import * as NestJsGraphQL from "@nestjs/graphql";
import { UsersCreateWithoutPostsInput } from "../../users/inputs/UsersCreateWithoutPostsInput.input";
import { UsersUpdateWithoutPostsInput } from "../../users/inputs/UsersUpdateWithoutPostsInput.input";

@NestJsGraphQL.InputType('UsersUpsertWithoutPostsInput', { isAbstract: true })
export class UsersUpsertWithoutPostsInput {
  @NestJsGraphQL.Field(() => UsersUpdateWithoutPostsInput)
  update!: UsersUpdateWithoutPostsInput;

  @NestJsGraphQL.Field(() => UsersCreateWithoutPostsInput)
  create!: UsersCreateWithoutPostsInput;
}
