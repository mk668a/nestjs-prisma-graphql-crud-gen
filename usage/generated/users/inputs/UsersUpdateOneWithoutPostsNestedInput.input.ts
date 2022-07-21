import * as NestJsGraphQL from "@nestjs/graphql";
import { UsersCreateOrConnectWithoutPostsInput } from "../../users/inputs/UsersCreateOrConnectWithoutPostsInput.input";
import { UsersCreateWithoutPostsInput } from "../../users/inputs/UsersCreateWithoutPostsInput.input";
import { UsersUpdateWithoutPostsInput } from "../../users/inputs/UsersUpdateWithoutPostsInput.input";
import { UsersUpsertWithoutPostsInput } from "../../users/inputs/UsersUpsertWithoutPostsInput.input";
import { UsersWhereUniqueInput } from "../../users/inputs/UsersWhereUniqueInput.input";

@NestJsGraphQL.InputType('UsersUpdateOneWithoutPostsNestedInput', { isAbstract: true })
export class UsersUpdateOneWithoutPostsNestedInput {
  @NestJsGraphQL.Field(() => UsersCreateWithoutPostsInput, { nullable: true })
  create?: UsersCreateWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => UsersCreateOrConnectWithoutPostsInput, { nullable: true })
  connectOrCreate?: UsersCreateOrConnectWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => UsersUpsertWithoutPostsInput, { nullable: true })
  upsert?: UsersUpsertWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @NestJsGraphQL.Field(() => UsersWhereUniqueInput, { nullable: true })
  connect?: UsersWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => UsersUpdateWithoutPostsInput, { nullable: true })
  update?: UsersUpdateWithoutPostsInput | undefined;
}
