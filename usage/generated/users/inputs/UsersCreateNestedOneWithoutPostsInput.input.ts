import * as NestJsGraphQL from "@nestjs/graphql";
import { UsersCreateOrConnectWithoutPostsInput } from "../../users/inputs/UsersCreateOrConnectWithoutPostsInput.input";
import { UsersCreateWithoutPostsInput } from "../../users/inputs/UsersCreateWithoutPostsInput.input";
import { UsersWhereUniqueInput } from "../../users/inputs/UsersWhereUniqueInput.input";

@NestJsGraphQL.InputType('UsersCreateNestedOneWithoutPostsInput', { isAbstract: true })
export class UsersCreateNestedOneWithoutPostsInput {
  @NestJsGraphQL.Field(() => UsersCreateWithoutPostsInput, { nullable: true })
  create?: UsersCreateWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => UsersCreateOrConnectWithoutPostsInput, { nullable: true })
  connectOrCreate?: UsersCreateOrConnectWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => UsersWhereUniqueInput, { nullable: true })
  connect?: UsersWhereUniqueInput | undefined;
}
