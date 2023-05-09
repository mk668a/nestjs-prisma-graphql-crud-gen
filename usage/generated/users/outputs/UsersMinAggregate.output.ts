import * as NestJsGraphQL from "@nestjs/graphql";
import { UserRole } from "../../enums/UserRole.enum";

@NestJsGraphQL.ObjectType('UsersMinAggregate', { isAbstract: true })
export class UsersMinAggregate {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  first_name!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  last_name!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  email!: string | null;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gender!: string | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  created_at!: Date | null;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @NestJsGraphQL.Field(() => UserRole, { nullable: true })
  role!: "ADMIN" | "AUTHOR" | null;
}
