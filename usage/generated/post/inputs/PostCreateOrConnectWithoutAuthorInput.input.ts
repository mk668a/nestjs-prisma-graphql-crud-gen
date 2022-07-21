import * as NestJsGraphQL from "@nestjs/graphql";
import { PostCreateWithoutAuthorInput } from "../../post/inputs/PostCreateWithoutAuthorInput.input";
import { PostWhereUniqueInput } from "../../post/inputs/PostWhereUniqueInput.input";

@NestJsGraphQL.InputType('PostCreateOrConnectWithoutAuthorInput', { isAbstract: true })
export class PostCreateOrConnectWithoutAuthorInput {
  @NestJsGraphQL.Field(() => PostWhereUniqueInput)
  where!: PostWhereUniqueInput;

  @NestJsGraphQL.Field(() => PostCreateWithoutAuthorInput)
  create!: PostCreateWithoutAuthorInput;
}
