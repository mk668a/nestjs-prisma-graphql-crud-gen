import * as NestJsGraphQL from "@nestjs/graphql";
import { PostUpdateWithoutAuthorInput } from "../../post/inputs/PostUpdateWithoutAuthorInput.input";
import { PostWhereUniqueInput } from "../../post/inputs/PostWhereUniqueInput.input";

@NestJsGraphQL.InputType('PostUpdateWithWhereUniqueWithoutAuthorInput', { isAbstract: true })
export class PostUpdateWithWhereUniqueWithoutAuthorInput {
  @NestJsGraphQL.Field(() => PostWhereUniqueInput)
  where!: PostWhereUniqueInput;

  @NestJsGraphQL.Field(() => PostUpdateWithoutAuthorInput)
  data!: PostUpdateWithoutAuthorInput;
}
