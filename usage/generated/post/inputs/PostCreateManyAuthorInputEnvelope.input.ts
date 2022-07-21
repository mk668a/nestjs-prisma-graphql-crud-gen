import * as NestJsGraphQL from "@nestjs/graphql";
import { PostCreateManyAuthorInput } from "../../post/inputs/PostCreateManyAuthorInput.input";

@NestJsGraphQL.InputType('PostCreateManyAuthorInputEnvelope', { isAbstract: true })
export class PostCreateManyAuthorInputEnvelope {
  @NestJsGraphQL.Field(() => [PostCreateManyAuthorInput])
  data!: PostCreateManyAuthorInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
