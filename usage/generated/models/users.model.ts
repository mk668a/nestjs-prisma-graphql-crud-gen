import * as NestJsGraphQL from "@nestjs/graphql";
import { Post } from "../models/post.model";
import { UsersCount } from "../users/users.output";

@NestJsGraphQL.ObjectType('Users', { isAbstract: true })
export class Users {
  @NestJsGraphQL.Field(() => String)
  id!: string;

  @NestJsGraphQL.Field(() => String)
  first_name!: string;

  @NestJsGraphQL.Field(() => String)
  last_name!: string;

  @NestJsGraphQL.Field(() => String)
  email!: string;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gender?: string | null;

  @NestJsGraphQL.Field(() => Date)
  created_at!: Date;

  @NestJsGraphQL.Field(() => Date)
  updated_at!: Date;

  posts?: Post[];

  @NestJsGraphQL.Field(() => UsersCount, { nullable: true })
  _count?: UsersCount | null;
}
