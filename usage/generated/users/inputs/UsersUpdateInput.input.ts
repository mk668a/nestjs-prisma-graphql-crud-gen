import * as NestJsGraphQL from "@nestjs/graphql";
import { DateTimeFieldUpdateOperationsInput } from "../../common/inputs/DateTimeFieldUpdateOperationsInput.input";
import { EnumUserRoleFieldUpdateOperationsInput } from "../../common/inputs/EnumUserRoleFieldUpdateOperationsInput.input";
import { NullableStringFieldUpdateOperationsInput } from "../../common/inputs/NullableStringFieldUpdateOperationsInput.input";
import { StringFieldUpdateOperationsInput } from "../../common/inputs/StringFieldUpdateOperationsInput.input";
import { PostUpdateManyWithoutAuthorNestedInput } from "../../post/inputs/PostUpdateManyWithoutAuthorNestedInput.input";

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

  @NestJsGraphQL.Field(() => PostUpdateManyWithoutAuthorNestedInput, { nullable: true })
  posts?: PostUpdateManyWithoutAuthorNestedInput | undefined;

  @NestJsGraphQL.Field(() => EnumUserRoleFieldUpdateOperationsInput, { nullable: true })
  role?: EnumUserRoleFieldUpdateOperationsInput | undefined;
}
