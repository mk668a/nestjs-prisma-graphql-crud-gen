import * as NestJsGraphQL from "@nestjs/graphql";
import { PostCreateManyAuthorInputEnvelope } from "../../post/inputs/PostCreateManyAuthorInputEnvelope.input";
import { PostCreateOrConnectWithoutAuthorInput } from "../../post/inputs/PostCreateOrConnectWithoutAuthorInput.input";
import { PostCreateWithoutAuthorInput } from "../../post/inputs/PostCreateWithoutAuthorInput.input";
import { PostWhereUniqueInput } from "../../post/inputs/PostWhereUniqueInput.input";

@NestJsGraphQL.InputType('PostCreateNestedManyWithoutAuthorInput', { isAbstract: true })
export class PostCreateNestedManyWithoutAuthorInput {
  @NestJsGraphQL.Field(() => [PostCreateWithoutAuthorInput], { nullable: true })
  create?: PostCreateWithoutAuthorInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostCreateOrConnectWithoutAuthorInput], { nullable: true })
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[] | undefined;

  @NestJsGraphQL.Field(() => PostCreateManyAuthorInputEnvelope, { nullable: true })
  createMany?: PostCreateManyAuthorInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [PostWhereUniqueInput], { nullable: true })
  connect?: PostWhereUniqueInput[] | undefined;
}
