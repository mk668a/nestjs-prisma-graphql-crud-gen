import * as NestJsGraphQL from "@nestjs/graphql";
import { UserRole } from "../../enums/UserRole.enum";
import { NestedEnumUserRoleFilter } from "./NestedEnumUserRoleFilter.input";
import { NestedIntFilter } from "./NestedIntFilter.input";

@NestJsGraphQL.InputType('NestedEnumUserRoleWithAggregatesFilter', { isAbstract: true })
export class NestedEnumUserRoleWithAggregatesFilter {
  @NestJsGraphQL.Field(() => UserRole, { nullable: true })
  equals?: "ADMIN" | "AUTHOR" | undefined;

  @NestJsGraphQL.Field(() => [UserRole], { nullable: true })
  in?: Array<"ADMIN" | "AUTHOR"> | undefined;

  @NestJsGraphQL.Field(() => [UserRole], { nullable: true })
  notIn?: Array<"ADMIN" | "AUTHOR"> | undefined;

  @NestJsGraphQL.Field(() => NestedEnumUserRoleWithAggregatesFilter, { nullable: true })
  not?: NestedEnumUserRoleWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumUserRoleFilter, { nullable: true })
  _min?: NestedEnumUserRoleFilter | undefined;

  @NestJsGraphQL.Field(() => NestedEnumUserRoleFilter, { nullable: true })
  _max?: NestedEnumUserRoleFilter | undefined;
}
