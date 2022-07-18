import * as NestJsGraphQL from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DecimalJSScalar } from "../scalars";
import { Users } from "../models/users.model";

@NestJsGraphQL.ObjectType("Post", {
        isAbstract: true
    })
export class Post {
    @NestJsGraphQL.Field(() => String)
    id!: string;

    @NestJsGraphQL.Field(() => Date)
    createdAt!: Date;

    @NestJsGraphQL.Field(() => Date)
    updatedAt!: Date;

    @NestJsGraphQL.Field(() => Boolean)
    published!: boolean;

    @NestJsGraphQL.Field(() => String)
    title!: string;

    @NestJsGraphQL.Field(() => String, { nullable: true })
    content?: string | null;

    author?: Users | null;

    @NestJsGraphQL.Field(() => String, { nullable: true })
    authorId?: string | null;
}
