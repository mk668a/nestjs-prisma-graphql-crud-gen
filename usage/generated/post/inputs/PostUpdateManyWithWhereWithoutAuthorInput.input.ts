import * as NestJsGraphQL from "@nestjs/graphql";
import { PostScalarWhereInput } from "../../post/inputs/PostScalarWhereInput.input";
import { PostUpdateManyMutationInput } from "../../post/inputs/PostUpdateManyMutationInput.input";

@NestJsGraphQL.InputType('PostUpdateManyWithWhereWithoutAuthorInput', { isAbstract: true })
export class PostUpdateManyWithWhereWithoutAuthorInput {
  @NestJsGraphQL.Field(() => PostScalarWhereInput)
  where!: PostScalarWhereInput;

  @NestJsGraphQL.Field(() => PostUpdateManyMutationInput)
  data!: PostUpdateManyMutationInput;
}
