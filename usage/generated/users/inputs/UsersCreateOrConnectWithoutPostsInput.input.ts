import * as NestJsGraphQL from "@nestjs/graphql";
import { UsersCreateWithoutPostsInput } from "../../users/inputs/UsersCreateWithoutPostsInput.input";
import { UsersWhereUniqueInput } from "../../users/inputs/UsersWhereUniqueInput.input";

@NestJsGraphQL.InputType('UsersCreateOrConnectWithoutPostsInput', { isAbstract: true })
export class UsersCreateOrConnectWithoutPostsInput {
  @NestJsGraphQL.Field(() => UsersWhereUniqueInput)
  where!: UsersWhereUniqueInput;

  @NestJsGraphQL.Field(() => UsersCreateWithoutPostsInput)
  create!: UsersCreateWithoutPostsInput;
}
