import * as NestJsGraphQL from "@nestjs/graphql";
import { PostWhereInput } from "../../post/inputs/PostWhereInput.input";

@NestJsGraphQL.InputType('PostListRelationFilter', { isAbstract: true })
export class PostListRelationFilter {
  @NestJsGraphQL.Field(() => PostWhereInput, { nullable: true })
  every?: PostWhereInput | undefined;

  @NestJsGraphQL.Field(() => PostWhereInput, { nullable: true })
  some?: PostWhereInput | undefined;

  @NestJsGraphQL.Field(() => PostWhereInput, { nullable: true })
  none?: PostWhereInput | undefined;
}
