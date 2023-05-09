import * as NestJsGraphQL from "@nestjs/graphql";
import { UsersScalarFieldEnum } from "../common/enums";
import { UsersCreateInput } from "../users/inputs/UsersCreateInput.input";
import { UsersCreateManyInput } from "../users/inputs/UsersCreateManyInput.input";
import { UsersOrderByWithAggregationInput } from "../users/inputs/UsersOrderByWithAggregationInput.input";
import { UsersOrderByWithRelationInput } from "../users/inputs/UsersOrderByWithRelationInput.input";
import { UsersScalarWhereWithAggregatesInput } from "../users/inputs/UsersScalarWhereWithAggregatesInput.input";
import { UsersUpdateInput } from "../users/inputs/UsersUpdateInput.input";
import { UsersUpdateManyMutationInput } from "../users/inputs/UsersUpdateManyMutationInput.input";
import { UsersWhereInput } from "../users/inputs/UsersWhereInput.input";
import { UsersWhereUniqueInput } from "../users/inputs/UsersWhereUniqueInput.input";

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
  distinct?: Array<"id" | "first_name" | "last_name" | "email" | "gender" | "created_at" | "updated_at" | "role"> | undefined;
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
  distinct?: Array<"id" | "first_name" | "last_name" | "email" | "gender" | "created_at" | "updated_at" | "role"> | undefined;
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
  by!: Array<"id" | "first_name" | "last_name" | "email" | "gender" | "created_at" | "updated_at" | "role">;

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
