import * as NestJsGraphQL from "@nestjs/graphql";
import { BoolFilter, DateTimeFilter, StringFilter, StringNullableFilter } from "../../common/inputs";

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
