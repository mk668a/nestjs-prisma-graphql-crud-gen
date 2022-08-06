import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('DateTimeFieldUpdateOperationsInput', { isAbstract: true })
export class DateTimeFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => Date, { nullable: true })
  set?: Date | undefined;
}
