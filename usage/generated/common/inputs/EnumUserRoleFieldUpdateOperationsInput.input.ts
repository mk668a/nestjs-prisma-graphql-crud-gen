import * as NestJsGraphQL from "@nestjs/graphql";
import { UserRole } from "../../enums/UserRole.enum";

@NestJsGraphQL.InputType('EnumUserRoleFieldUpdateOperationsInput', { isAbstract: true })
export class EnumUserRoleFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => UserRole, { nullable: true })
  set?: "ADMIN" | "AUTHOR" | undefined;
}
