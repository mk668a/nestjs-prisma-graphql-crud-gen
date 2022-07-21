import * as NestJsGraphQL from "@nestjs/graphql";
import { BoolFieldUpdateOperationsInput, DateTimeFieldUpdateOperationsInput, NullableStringFieldUpdateOperationsInput, StringFieldUpdateOperationsInput } from "../../common/inputs";

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
