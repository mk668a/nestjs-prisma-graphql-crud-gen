import * as NestJsGraphQL from "@nestjs/graphql";

@NestJsGraphQL.InputType('BoolFieldUpdateOperationsInput', { isAbstract: true })
export class BoolFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  set?: boolean | undefined;
}
