import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('StringFieldUpdateOperationsInput', { isAbstract: true })
export class StringFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  set?: string | undefined;
}
