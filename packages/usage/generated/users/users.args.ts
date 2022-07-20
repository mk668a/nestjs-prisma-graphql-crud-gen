import * as NestJsGraphQL from '@nestjs/graphql'
import { PostOrderByWithRelationInput, PostWhereInput, PostWhereUniqueInput } from '../post/post.input'
import { PostScalarFieldEnum } from '../common/enums'

@NestJsGraphQL.ArgsType()
export class UsersPostsArgs {
  @NestJsGraphQL.Field(() => PostWhereInput, { nullable: true })
  where?: PostWhereInput | undefined

  @NestJsGraphQL.Field(() => [PostOrderByWithRelationInput], { nullable: true })
  orderBy?: PostOrderByWithRelationInput[] | undefined

  @NestJsGraphQL.Field(() => PostWhereUniqueInput, { nullable: true })
  cursor?: PostWhereUniqueInput | undefined

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  take?: number | undefined

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  skip?: number | undefined

  @NestJsGraphQL.Field(() => [PostScalarFieldEnum], { nullable: true })
  distinct?: Array<'id' | 'createdAt' | 'updatedAt' | 'published' | 'title' | 'content' | 'authorId'> | undefined
}
