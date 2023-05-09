import * as NestJsGraphQL from "@nestjs/graphql";
import { UserRole } from "../../enums/UserRole.enum";

@NestJsGraphQL.InputType('NestedEnumUserRoleFilter', { isAbstract: true })
export class NestedEnumUserRoleFilter {
  @NestJsGraphQL.Field(() => UserRole, { nullable: true })
  equals?: "ADMIN" | "AUTHOR" | undefined;

  @NestJsGraphQL.Field(() => [UserRole], { nullable: true })
  in?: Array<"ADMIN" | "AUTHOR"> | undefined;

  @NestJsGraphQL.Field(() => [UserRole], { nullable: true })
  notIn?: Array<"ADMIN" | "AUTHOR"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumUserRoleFilter, { nullable: true })
  not?: NestedEnumUserRoleFilter | undefined;
}
