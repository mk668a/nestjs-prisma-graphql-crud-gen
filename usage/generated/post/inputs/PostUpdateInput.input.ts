import * as NestJsGraphQL from "@nestjs/graphql";
import { BoolFieldUpdateOperationsInput, DateTimeFieldUpdateOperationsInput, NullableStringFieldUpdateOperationsInput, StringFieldUpdateOperationsInput } from "../../common/inputs";
import { UsersUpdateOneWithoutPostsNestedInput } from "../../users/inputs/UsersUpdateOneWithoutPostsNestedInput.input";

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

  @NestJsGraphQL.Field(() => UsersUpdateOneWithoutPostsNestedInput, { nullable: true })
  author?: UsersUpdateOneWithoutPostsNestedInput | undefined;
}
