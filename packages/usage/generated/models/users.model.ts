import * as NestJsGraphQL from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/post.model";

@NestJsGraphQL.ObjectType("Users", {
        isAbstract: true
    })
export class Users {
    @NestJsGraphQL.Field(() => String)
    id!: string;

    @NestJsGraphQL.Field(() => String)
    email!: string;

    @NestJsGraphQL.Field(() => String, { nullable: true })
    name?: string | null;

    posts?: Post[];
}
