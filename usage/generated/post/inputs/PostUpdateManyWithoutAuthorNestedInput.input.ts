import * as NestJsGraphQL from "@nestjs/graphql";
import { PostCreateManyAuthorInputEnvelope } from "../../post/inputs/PostCreateManyAuthorInputEnvelope.input";
import { PostCreateOrConnectWithoutAuthorInput } from "../../post/inputs/PostCreateOrConnectWithoutAuthorInput.input";
import { PostCreateWithoutAuthorInput } from "../../post/inputs/PostCreateWithoutAuthorInput.input";
import { PostScalarWhereInput } from "../../post/inputs/PostScalarWhereInput.input";
import { PostUpdateManyWithWhereWithoutAuthorInput } from "../../post/inputs/PostUpdateManyWithWhereWithoutAuthorInput.input";
import { PostUpdateWithWhereUniqueWithoutAuthorInput } from "../../post/inputs/PostUpdateWithWhereUniqueWithoutAuthorInput.input";
import { PostUpsertWithWhereUniqueWithoutAuthorInput } from "../../post/inputs/PostUpsertWithWhereUniqueWithoutAuthorInput.input";
import { PostWhereUniqueInput } from "../../post/inputs/PostWhereUniqueInput.input";

@NestJsGraphQL.InputType('PostUpdateManyWithoutAuthorNestedInput', { isAbstract: true })
export class PostUpdateManyWithoutAuthorNestedInput {
  @NestJsGraphQL.Field(() => [PostCreateWithoutAuthorInput], { nullable: true })
  create?: PostCreateWithoutAuthorInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostCreateOrConnectWithoutAuthorInput], { nullable: true })
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostUpsertWithWhereUniqueWithoutAuthorInput], { nullable: true })
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @NestJsGraphQL.Field(() => PostCreateManyAuthorInputEnvelope, { nullable: true })
  createMany?: PostCreateManyAuthorInputEnvelope | undefined;

  @NestJsGraphQL.Field(() => [PostWhereUniqueInput], { nullable: true })
  set?: PostWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostWhereUniqueInput], { nullable: true })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostWhereUniqueInput], { nullable: true })
  delete?: PostWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostWhereUniqueInput], { nullable: true })
  connect?: PostWhereUniqueInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostUpdateWithWhereUniqueWithoutAuthorInput], { nullable: true })
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostUpdateManyWithWhereWithoutAuthorInput], { nullable: true })
  updateMany?: PostUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostScalarWhereInput], { nullable: true })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
