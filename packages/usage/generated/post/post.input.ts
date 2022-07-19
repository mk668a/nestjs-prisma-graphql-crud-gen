import * as NestJsGraphQL from "@nestjs/graphql";
import { StringFilter, StringNullableFilter, DateTimeFilter, StringWithAggregatesFilter, StringNullableWithAggregatesFilter, DateTimeWithAggregatesFilter, BoolFilter, BoolWithAggregatesFilter, StringFieldUpdateOperationsInput, NullableStringFieldUpdateOperationsInput, DateTimeFieldUpdateOperationsInput, BoolFieldUpdateOperationsInput, NestedStringFilter, NestedStringNullableFilter, NestedDateTimeFilter, NestedStringWithAggregatesFilter, NestedIntFilter, NestedStringNullableWithAggregatesFilter, NestedIntNullableFilter, NestedDateTimeWithAggregatesFilter, NestedBoolFilter, NestedBoolWithAggregatesFilter } from "../common/inputs";
import { UsersWhereInput, UsersOrderByWithRelationInput, UsersWhereUniqueInput, UsersOrderByWithAggregationInput, UsersScalarWhereWithAggregatesInput, UsersCreateInput, UsersUpdateInput, UsersCreateManyInput, UsersUpdateManyMutationInput, UsersCountOrderByAggregateInput, UsersMaxOrderByAggregateInput, UsersMinOrderByAggregateInput, UsersRelationFilter, UsersCreateNestedOneWithoutPostsInput, UsersUpdateOneWithoutPostsInput, UsersCreateWithoutPostsInput, UsersCreateOrConnectWithoutPostsInput, UsersUpsertWithoutPostsInput, UsersUpdateWithoutPostsInput } from "../users/users.input";
import { SortOrder, QueryMode } from "../common/enums";

@NestJsGraphQL.InputType('PostWhereInput', { isAbstract: true })
export class PostWhereInput {
  @NestJsGraphQL.Field(() => [PostWhereInput], { nullable: true })
  AND?: PostWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostWhereInput], { nullable: true })
  OR?: PostWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostWhereInput], { nullable: true })
  NOT?: PostWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => BoolFilter, { nullable: true })
  published?: BoolFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  content?: StringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => UsersRelationFilter, { nullable: true })
  author?: UsersRelationFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  authorId?: StringNullableFilter | undefined;
}

@NestJsGraphQL.InputType('PostOrderByWithRelationInput', { isAbstract: true })
export class PostOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  published?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  content?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => UsersOrderByWithRelationInput, { nullable: true })
  author?: UsersOrderByWithRelationInput | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  authorId?: "asc" | "desc" | undefined;
}

@NestJsGraphQL.InputType('PostWhereUniqueInput', { isAbstract: true })
export class PostWhereUniqueInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;
}

@NestJsGraphQL.InputType('PostOrderByWithAggregationInput', { isAbstract: true })
export class PostOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  published?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  content?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  authorId?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => PostCountOrderByAggregateInput, { nullable: true })
  _count?: PostCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => PostMaxOrderByAggregateInput, { nullable: true })
  _max?: PostMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => PostMinOrderByAggregateInput, { nullable: true })
  _min?: PostMinOrderByAggregateInput | undefined;
}

@NestJsGraphQL.InputType('PostScalarWhereWithAggregatesInput', { isAbstract: true })
export class PostScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [PostScalarWhereWithAggregatesInput], { nullable: true })
  AND?: PostScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostScalarWhereWithAggregatesInput], { nullable: true })
  OR?: PostScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: PostScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => BoolWithAggregatesFilter, { nullable: true })
  published?: BoolWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  content?: StringNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  authorId?: StringNullableWithAggregatesFilter | undefined;
}

@NestJsGraphQL.InputType('PostCreateInput', { isAbstract: true })
export class PostCreateInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Boolean)
  published!: boolean;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content?: string | undefined;

  @NestJsGraphQL.Field(() => UsersCreateNestedOneWithoutPostsInput, { nullable: true })
  author?: UsersCreateNestedOneWithoutPostsInput | undefined;
}

@NestJsGraphQL.InputType('PostUpdateInput', { isAbstract: true })
export class PostUpdateInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  published?: BoolFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  content?: NullableStringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => UsersUpdateOneWithoutPostsInput, { nullable: true })
  author?: UsersUpdateOneWithoutPostsInput | undefined;
}

@NestJsGraphQL.InputType('PostCreateManyInput', { isAbstract: true })
export class PostCreateManyInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Boolean)
  published!: boolean;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  authorId?: string | undefined;
}

@NestJsGraphQL.InputType('PostUpdateManyMutationInput', { isAbstract: true })
export class PostUpdateManyMutationInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  published?: BoolFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  content?: NullableStringFieldUpdateOperationsInput | undefined;
}

@NestJsGraphQL.InputType('PostListRelationFilter', { isAbstract: true })
export class PostListRelationFilter {
  @NestJsGraphQL.Field(() => PostWhereInput, { nullable: true })
  every?: PostWhereInput | undefined;

  @NestJsGraphQL.Field(() => PostWhereInput, { nullable: true })
  some?: PostWhereInput | undefined;

  @NestJsGraphQL.Field(() => PostWhereInput, { nullable: true })
  none?: PostWhereInput | undefined;
}

@NestJsGraphQL.InputType('PostOrderByRelationAggregateInput', { isAbstract: true })
export class PostOrderByRelationAggregateInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  _count?: "asc" | "desc" | undefined;
}

@NestJsGraphQL.InputType('PostCountOrderByAggregateInput', { isAbstract: true })
export class PostCountOrderByAggregateInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  published?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  content?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  authorId?: "asc" | "desc" | undefined;
}

@NestJsGraphQL.InputType('PostMaxOrderByAggregateInput', { isAbstract: true })
export class PostMaxOrderByAggregateInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  published?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  content?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  authorId?: "asc" | "desc" | undefined;
}

@NestJsGraphQL.InputType('PostMinOrderByAggregateInput', { isAbstract: true })
export class PostMinOrderByAggregateInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  createdAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updatedAt?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  published?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  title?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  content?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  authorId?: "asc" | "desc" | undefined;
}

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

@NestJsGraphQL.InputType('PostUpdateManyWithoutAuthorInput', { isAbstract: true })
export class PostUpdateManyWithoutAuthorInput {
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

@NestJsGraphQL.InputType('PostCreateWithoutAuthorInput', { isAbstract: true })
export class PostCreateWithoutAuthorInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Boolean)
  published!: boolean;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content?: string | undefined;
}

@NestJsGraphQL.InputType('PostCreateOrConnectWithoutAuthorInput', { isAbstract: true })
export class PostCreateOrConnectWithoutAuthorInput {
  @NestJsGraphQL.Field(() => PostWhereUniqueInput)
  where!: PostWhereUniqueInput;

  @NestJsGraphQL.Field(() => PostCreateWithoutAuthorInput)
  create!: PostCreateWithoutAuthorInput;
}

@NestJsGraphQL.InputType('PostCreateManyAuthorInputEnvelope', { isAbstract: true })
export class PostCreateManyAuthorInputEnvelope {
  @NestJsGraphQL.Field(() => [PostCreateManyAuthorInput])
  data!: PostCreateManyAuthorInput[];

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}

@NestJsGraphQL.InputType('PostUpsertWithWhereUniqueWithoutAuthorInput', { isAbstract: true })
export class PostUpsertWithWhereUniqueWithoutAuthorInput {
  @NestJsGraphQL.Field(() => PostWhereUniqueInput)
  where!: PostWhereUniqueInput;

  @NestJsGraphQL.Field(() => PostUpdateWithoutAuthorInput)
  update!: PostUpdateWithoutAuthorInput;

  @NestJsGraphQL.Field(() => PostCreateWithoutAuthorInput)
  create!: PostCreateWithoutAuthorInput;
}

@NestJsGraphQL.InputType('PostUpdateWithWhereUniqueWithoutAuthorInput', { isAbstract: true })
export class PostUpdateWithWhereUniqueWithoutAuthorInput {
  @NestJsGraphQL.Field(() => PostWhereUniqueInput)
  where!: PostWhereUniqueInput;

  @NestJsGraphQL.Field(() => PostUpdateWithoutAuthorInput)
  data!: PostUpdateWithoutAuthorInput;
}

@NestJsGraphQL.InputType('PostUpdateManyWithWhereWithoutAuthorInput', { isAbstract: true })
export class PostUpdateManyWithWhereWithoutAuthorInput {
  @NestJsGraphQL.Field(() => PostScalarWhereInput)
  where!: PostScalarWhereInput;

  @NestJsGraphQL.Field(() => PostUpdateManyMutationInput)
  data!: PostUpdateManyMutationInput;
}

@NestJsGraphQL.InputType('PostScalarWhereInput', { isAbstract: true })
export class PostScalarWhereInput {
  @NestJsGraphQL.Field(() => [PostScalarWhereInput], { nullable: true })
  AND?: PostScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostScalarWhereInput], { nullable: true })
  OR?: PostScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [PostScalarWhereInput], { nullable: true })
  NOT?: PostScalarWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => BoolFilter, { nullable: true })
  published?: BoolFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  content?: StringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  authorId?: StringNullableFilter | undefined;
}

@NestJsGraphQL.InputType('PostCreateManyAuthorInput', { isAbstract: true })
export class PostCreateManyAuthorInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  createdAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updatedAt?: Date | undefined;

  @NestJsGraphQL.Field(() => Boolean)
  published!: boolean;

  @NestJsGraphQL.Field(() => String)
  title!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  content?: string | undefined;
}

@NestJsGraphQL.InputType('PostUpdateWithoutAuthorInput', { isAbstract: true })
export class PostUpdateWithoutAuthorInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  published?: BoolFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  title?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  content?: NullableStringFieldUpdateOperationsInput | undefined;
}
