import * as NestJsGraphQL from "@nestjs/graphql";
import { UsersOrderByWithRelationInput, UsersWhereInput, UsersWhereUniqueInput, UsersCreateManyInput, UsersCreateInput, UsersOrderByWithAggregationInput, UsersScalarWhereWithAggregatesInput, UsersUpdateManyMutationInput, UsersUpdateInput } from "../users/users.input";
import { PostOrderByWithRelationInput, PostWhereInput, PostWhereUniqueInput, PostCreateManyInput, PostCreateInput, PostOrderByWithAggregationInput, PostScalarWhereWithAggregatesInput, PostUpdateManyMutationInput, PostUpdateInput } from "../post/post.input";
import { UsersScalarFieldEnum, PostScalarFieldEnum } from "../common/enums";

@NestJsGraphQL.ArgsType()
export class AggregateUsersArgs {
  @NestJsGraphQL.Field(() => UsersWhereInput, { nullable: true })
  where?: UsersWhereInput | undefined;

  @NestJsGraphQL.Field(() => [UsersOrderByWithRelationInput], { nullable: true })
  orderBy?: UsersOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => UsersWhereUniqueInput, { nullable: true })
  cursor?: UsersWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateManyUsersArgs {
  @NestJsGraphQL.Field(() => [UsersCreateManyInput])
  data!: UsersCreateManyInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.ArgsType()
export class CreateOneUsersArgs {
  @NestJsGraphQL.Field(() => UsersCreateInput)
  data!: UsersCreateInput;
}

@NestJsGraphQL.ArgsType()
export class DeleteManyUsersArgs {
  @NestJsGraphQL.Field(() => UsersWhereInput, { nullable: true })
  where?: UsersWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class DeleteOneUsersArgs {
  @NestJsGraphQL.Field(() => UsersWhereUniqueInput)
  where!: UsersWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class FindFirstUsersArgs {
  @NestJsGraphQL.Field(() => UsersWhereInput, { nullable: true })
  where?: UsersWhereInput | undefined;

  @NestJsGraphQL.Field(() => [UsersOrderByWithRelationInput], { nullable: true })
  orderBy?: UsersOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => UsersWhereUniqueInput, { nullable: true })
  cursor?: UsersWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [UsersScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "first_name" | "last_name" | "email" | "gender" | "created_at" | "updated_at"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindManyUsersArgs {
  @NestJsGraphQL.Field(() => UsersWhereInput, { nullable: true })
  where?: UsersWhereInput | undefined;

  @NestJsGraphQL.Field(() => [UsersOrderByWithRelationInput], { nullable: true })
  orderBy?: UsersOrderByWithRelationInput[] | undefined;

  @NestJsGraphQL.Field(() => UsersWhereUniqueInput, { nullable: true })
  cursor?: UsersWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @NestJsGraphQL.Field(() => [UsersScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "first_name" | "last_name" | "email" | "gender" | "created_at" | "updated_at"> | undefined;
}

@NestJsGraphQL.ArgsType()
export class FindUniqueUsersArgs {
  @NestJsGraphQL.Field(() => UsersWhereUniqueInput)
  where!: UsersWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class GroupByUsersArgs {
  @NestJsGraphQL.Field(() => UsersWhereInput, { nullable: true })
  where?: UsersWhereInput | undefined;

  @NestJsGraphQL.Field(() => [UsersOrderByWithAggregationInput], { nullable: true })
  orderBy?: UsersOrderByWithAggregationInput[] | undefined;

  @NestJsGraphQL.Field(() => [UsersScalarFieldEnum])
  by!: Array<"id" | "first_name" | "last_name" | "email" | "gender" | "created_at" | "updated_at">;

  @NestJsGraphQL.Field(() => UsersScalarWhereWithAggregatesInput, { nullable: true })
  having?: UsersScalarWhereWithAggregatesInput | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateManyUsersArgs {
  @NestJsGraphQL.Field(() => UsersUpdateManyMutationInput)
  data!: UsersUpdateManyMutationInput;

  @NestJsGraphQL.Field(() => UsersWhereInput, { nullable: true })
  where?: UsersWhereInput | undefined;
}

@NestJsGraphQL.ArgsType()
export class UpdateOneUsersArgs {
  @NestJsGraphQL.Field(() => UsersUpdateInput)
  data!: UsersUpdateInput;

  @NestJsGraphQL.Field(() => UsersWhereUniqueInput)
  where!: UsersWhereUniqueInput;
}

@NestJsGraphQL.ArgsType()
export class UpsertOneUsersArgs {
  @NestJsGraphQL.Field(() => UsersWhereUniqueInput)
  where!: UsersWhereUniqueInput;

  @NestJsGraphQL.Field(() => UsersCreateInput)
  create!: UsersCreateInput;

  @NestJsGraphQL.Field(() => UsersUpdateInput)
  update!: UsersUpdateInput;
}

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
