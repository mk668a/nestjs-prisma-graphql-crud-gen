import * as NestJsGraphQL from "@nestjs/graphql";
import { PostScalarFieldEnum } from "../common/enums";
import { PostCreateInput } from "../post/inputs/PostCreateInput.input";
import { PostCreateManyInput } from "../post/inputs/PostCreateManyInput.input";
import { PostOrderByWithAggregationInput } from "../post/inputs/PostOrderByWithAggregationInput.input";
import { PostOrderByWithRelationInput } from "../post/inputs/PostOrderByWithRelationInput.input";
import { PostScalarWhereWithAggregatesInput } from "../post/inputs/PostScalarWhereWithAggregatesInput.input";
import { PostUpdateInput } from "../post/inputs/PostUpdateInput.input";
import { PostUpdateManyMutationInput } from "../post/inputs/PostUpdateManyMutationInput.input";
import { PostWhereInput } from "../post/inputs/PostWhereInput.input";
import { PostWhereUniqueInput } from "../post/inputs/PostWhereUniqueInput.input";

@NestJsGraphQL.ArgsType()
export class AggregatePostArgs {
  @NestJsGraphQL.Field(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;

  @NestJsGraphQL.Field(() => [PostOrderByWithRelationInput], { nullable: true })
  orderBy?: PostOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => PostWhereUniqueInput, { nullable: true })
  cursor?: PostWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyPostArgs {
  @NestJsGraphQL.Field(() => [PostCreateManyInput])
  data!: PostCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOnePostArgs {
  @NestJsGraphQL.Field(() => PostCreateInput)
  data!: PostCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyPostArgs {
  @NestJsGraphQL.Field(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOnePostArgs {
  @NestJsGraphQL.Field(() => PostWhereUniqueInput)
  where!: PostWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstPostArgs {
  @NestJsGraphQL.Field(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;

  @NestJsGraphQL.Field(() => [PostOrderByWithRelationInput], { nullable: true })
  orderBy?: PostOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => PostWhereUniqueInput, { nullable: true })
  cursor?: PostWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [PostScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "published" | "title" | "content" | "authorId"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyPostArgs {
  @NestJsGraphQL.Field(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;

  @NestJsGraphQL.Field(() => [PostOrderByWithRelationInput], { nullable: true })
  orderBy?: PostOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => PostWhereUniqueInput, { nullable: true })
  cursor?: PostWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [PostScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "published" | "title" | "content" | "authorId"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniquePostArgs {
  @NestJsGraphQL.Field(() => PostWhereUniqueInput)
  where!: PostWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByPostArgs {
  @NestJsGraphQL.Field(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;

  @NestJsGraphQL.Field(() => [PostOrderByWithAggregationInput], { nullable: true })
  orderBy?: PostOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostScalarFieldEnum])
  by!: Array<"id" | "createdAt" | "updatedAt" | "published" | "title" | "content" | "authorId">;

  @NestJsGraphQL.Field(() => PostScalarWhereWithAggregatesInput, { nullable: true })
  having?: PostScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyPostArgs {
  @NestJsGraphQL.Field(() => PostUpdateManyMutationInput)
  data!: PostUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOnePostArgs {
  @NestJsGraphQL.Field(() => PostUpdateInput)
  data!: PostUpdateInput;

  @NestJsGraphQL.Field(() => PostWhereUniqueInput)
  where!: PostWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOnePostArgs {
  @NestJsGraphQL.Field(() => PostWhereUniqueInput)
  where!: PostWhereUniqueInput;

  @NestJsGraphQL.Field(() => PostCreateInput)
  create!: PostCreateInput;

  @NestJsGraphQL.Field(() => PostUpdateInput)
  update!: PostUpdateInput;
}
