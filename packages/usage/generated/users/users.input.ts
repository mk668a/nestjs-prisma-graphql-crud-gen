import * as NestJsGraphQL from "@nestjs/graphql";
import { StringFilter, StringNullableFilter, DateTimeFilter, StringWithAggregatesFilter, StringNullableWithAggregatesFilter, DateTimeWithAggregatesFilter, BoolFilter, BoolWithAggregatesFilter, StringFieldUpdateOperationsInput, NullableStringFieldUpdateOperationsInput, DateTimeFieldUpdateOperationsInput, BoolFieldUpdateOperationsInput, NestedStringFilter, NestedStringNullableFilter, NestedDateTimeFilter, NestedStringWithAggregatesFilter, NestedIntFilter, NestedStringNullableWithAggregatesFilter, NestedIntNullableFilter, NestedDateTimeWithAggregatesFilter, NestedBoolFilter, NestedBoolWithAggregatesFilter } from "../common/inputs";
import { PostWhereInput, PostOrderByWithRelationInput, PostWhereUniqueInput, PostOrderByWithAggregationInput, PostScalarWhereWithAggregatesInput, PostCreateInput, PostUpdateInput, PostCreateManyInput, PostUpdateManyMutationInput, PostListRelationFilter, PostOrderByRelationAggregateInput, PostCountOrderByAggregateInput, PostMaxOrderByAggregateInput, PostMinOrderByAggregateInput, PostCreateNestedManyWithoutAuthorInput, PostUpdateManyWithoutAuthorInput, PostCreateWithoutAuthorInput, PostCreateOrConnectWithoutAuthorInput, PostCreateManyAuthorInputEnvelope, PostUpsertWithWhereUniqueWithoutAuthorInput, PostUpdateWithWhereUniqueWithoutAuthorInput, PostUpdateManyWithWhereWithoutAuthorInput, PostScalarWhereInput, PostCreateManyAuthorInput, PostUpdateWithoutAuthorInput } from "../post/post.input";
import { SortOrder, QueryMode } from "../common/enums";

@NestJsGraphQL.InputType('UsersWhereInput', { isAbstract: true })
export class UsersWhereInput {
  @NestJsGraphQL.Field(() => [UsersWhereInput], { nullable: true })
  AND?: UsersWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [UsersWhereInput], { nullable: true })
  OR?: UsersWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => [UsersWhereInput], { nullable: true })
  NOT?: UsersWhereInput[] | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  first_name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  last_name?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringFilter, { nullable: true })
  email?: StringFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableFilter, { nullable: true })
  gender?: StringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => PostListRelationFilter, { nullable: true })
  posts?: PostListRelationFilter | undefined;
}

@NestJsGraphQL.InputType('UsersOrderByWithRelationInput', { isAbstract: true })
export class UsersOrderByWithRelationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  first_name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  last_name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  email?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  gender?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  created_at?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updated_at?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => PostOrderByRelationAggregateInput, { nullable: true })
  posts?: PostOrderByRelationAggregateInput | undefined;
}

@NestJsGraphQL.InputType('UsersWhereUniqueInput', { isAbstract: true })
export class UsersWhereUniqueInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  email?: string | undefined;
}

@NestJsGraphQL.InputType('UsersOrderByWithAggregationInput', { isAbstract: true })
export class UsersOrderByWithAggregationInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  first_name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  last_name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  email?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  gender?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  created_at?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updated_at?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => UsersCountOrderByAggregateInput, { nullable: true })
  _count?: UsersCountOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => UsersMaxOrderByAggregateInput, { nullable: true })
  _max?: UsersMaxOrderByAggregateInput | undefined;

  @NestJsGraphQL.Field(() => UsersMinOrderByAggregateInput, { nullable: true })
  _min?: UsersMinOrderByAggregateInput | undefined;
}

@NestJsGraphQL.InputType('UsersScalarWhereWithAggregatesInput', { isAbstract: true })
export class UsersScalarWhereWithAggregatesInput {
  @NestJsGraphQL.Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  AND?: UsersScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  OR?: UsersScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: UsersScalarWhereWithAggregatesInput[] | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  first_name?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  last_name?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: StringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  gender?: StringNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter | undefined;
}

@NestJsGraphQL.InputType('UsersCreateInput', { isAbstract: true })
export class UsersCreateInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @NestJsGraphQL.Field(() => String)
  first_name!: string;

  @NestJsGraphQL.Field(() => String)
  last_name!: string;

  @NestJsGraphQL.Field(() => String)
  email!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gender?: string | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  created_at?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updated_at?: Date | undefined;

  @NestJsGraphQL.Field(() => PostCreateNestedManyWithoutAuthorInput, { nullable: true })
  posts?: PostCreateNestedManyWithoutAuthorInput | undefined;
}

@NestJsGraphQL.InputType('UsersUpdateInput', { isAbstract: true })
export class UsersUpdateInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  first_name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  last_name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  gender?: NullableStringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => PostUpdateManyWithoutAuthorInput, { nullable: true })
  posts?: PostUpdateManyWithoutAuthorInput | undefined;
}

@NestJsGraphQL.InputType('UsersCreateManyInput', { isAbstract: true })
export class UsersCreateManyInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @NestJsGraphQL.Field(() => String)
  first_name!: string;

  @NestJsGraphQL.Field(() => String)
  last_name!: string;

  @NestJsGraphQL.Field(() => String)
  email!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gender?: string | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  created_at?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updated_at?: Date | undefined;
}

@NestJsGraphQL.InputType('UsersUpdateManyMutationInput', { isAbstract: true })
export class UsersUpdateManyMutationInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  first_name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  last_name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  gender?: NullableStringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}

@NestJsGraphQL.InputType('UsersCountOrderByAggregateInput', { isAbstract: true })
export class UsersCountOrderByAggregateInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  first_name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  last_name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  email?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  gender?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  created_at?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updated_at?: "asc" | "desc" | undefined;
}

@NestJsGraphQL.InputType('UsersMaxOrderByAggregateInput', { isAbstract: true })
export class UsersMaxOrderByAggregateInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  first_name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  last_name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  email?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  gender?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  created_at?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updated_at?: "asc" | "desc" | undefined;
}

@NestJsGraphQL.InputType('UsersMinOrderByAggregateInput', { isAbstract: true })
export class UsersMinOrderByAggregateInput {
  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  id?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  first_name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  last_name?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  email?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  gender?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  created_at?: "asc" | "desc" | undefined;

  @NestJsGraphQL.Field(() => SortOrder, { nullable: true })
  updated_at?: "asc" | "desc" | undefined;
}

@NestJsGraphQL.InputType('UsersRelationFilter', { isAbstract: true })
export class UsersRelationFilter {
  @NestJsGraphQL.Field(() => UsersWhereInput, { nullable: true })
  is?: UsersWhereInput | undefined;

  @NestJsGraphQL.Field(() => UsersWhereInput, { nullable: true })
  isNot?: UsersWhereInput | undefined;
}

@NestJsGraphQL.InputType('UsersCreateNestedOneWithoutPostsInput', { isAbstract: true })
export class UsersCreateNestedOneWithoutPostsInput {
  @NestJsGraphQL.Field(() => UsersCreateWithoutPostsInput, { nullable: true })
  create?: UsersCreateWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => UsersCreateOrConnectWithoutPostsInput, { nullable: true })
  connectOrCreate?: UsersCreateOrConnectWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => UsersWhereUniqueInput, { nullable: true })
  connect?: UsersWhereUniqueInput | undefined;
}

@NestJsGraphQL.InputType('UsersUpdateOneWithoutPostsInput', { isAbstract: true })
export class UsersUpdateOneWithoutPostsInput {
  @NestJsGraphQL.Field(() => UsersCreateWithoutPostsInput, { nullable: true })
  create?: UsersCreateWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => UsersCreateOrConnectWithoutPostsInput, { nullable: true })
  connectOrCreate?: UsersCreateOrConnectWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => UsersUpsertWithoutPostsInput, { nullable: true })
  upsert?: UsersUpsertWithoutPostsInput | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @NestJsGraphQL.Field(() => UsersWhereUniqueInput, { nullable: true })
  connect?: UsersWhereUniqueInput | undefined;

  @NestJsGraphQL.Field(() => UsersUpdateWithoutPostsInput, { nullable: true })
  update?: UsersUpdateWithoutPostsInput | undefined;
}

@NestJsGraphQL.InputType('UsersCreateWithoutPostsInput', { isAbstract: true })
export class UsersCreateWithoutPostsInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @NestJsGraphQL.Field(() => String)
  first_name!: string;

  @NestJsGraphQL.Field(() => String)
  last_name!: string;

  @NestJsGraphQL.Field(() => String)
  email!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gender?: string | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  created_at?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updated_at?: Date | undefined;
}

@NestJsGraphQL.InputType('UsersCreateOrConnectWithoutPostsInput', { isAbstract: true })
export class UsersCreateOrConnectWithoutPostsInput {
  @NestJsGraphQL.Field(() => UsersWhereUniqueInput)
  where!: UsersWhereUniqueInput;

  @NestJsGraphQL.Field(() => UsersCreateWithoutPostsInput)
  create!: UsersCreateWithoutPostsInput;
}

@NestJsGraphQL.InputType('UsersUpsertWithoutPostsInput', { isAbstract: true })
export class UsersUpsertWithoutPostsInput {
  @NestJsGraphQL.Field(() => UsersUpdateWithoutPostsInput)
  update!: UsersUpdateWithoutPostsInput;

  @NestJsGraphQL.Field(() => UsersCreateWithoutPostsInput)
  create!: UsersCreateWithoutPostsInput;
}

@NestJsGraphQL.InputType('UsersUpdateWithoutPostsInput', { isAbstract: true })
export class UsersUpdateWithoutPostsInput {
  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  first_name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  last_name?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  gender?: NullableStringFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @NestJsGraphQL.Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
}
