import * as NestJsGraphQL from "@nestjs/graphql";
import { PostCreateWithoutAuthorInput } from "../../post/inputs/PostCreateWithoutAuthorInput.input";
import { PostUpdateWithoutAuthorInput } from "../../post/inputs/PostUpdateWithoutAuthorInput.input";
import { PostWhereUniqueInput } from "../../post/inputs/PostWhereUniqueInput.input";

@NestJsGraphQL.InputType('PostUpsertWithWhereUniqueWithoutAuthorInput', { isAbstract: true })
export class PostUpsertWithWhereUniqueWithoutAuthorInput {
  @NestJsGraphQL.Field(() => PostWhereUniqueInput)
  where!: PostWhereUniqueInput;

  @NestJsGraphQL.Field(() => PostUpdateWithoutAuthorInput)
  update!: PostUpdateWithoutAuthorInput;

  @NestJsGraphQL.Field(() => PostCreateWithoutAuthorInput)
  create!: PostCreateWithoutAuthorInput;
}
