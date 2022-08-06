import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('NullableStringFieldUpdateOperationsInput', { isAbstract: true })
export class NullableStringFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  set?: string | undefined;
}
