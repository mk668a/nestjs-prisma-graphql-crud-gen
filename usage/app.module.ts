import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { PRISMA_CLIENT } from 'nestjs-prisma-graphql-crud-gen-runtime'
import { PrismaService } from './prisma.service'
import { UserModule } from './generated/user/user.crud'
import { PostModule } from './generated/post/post.crud'
import { CategoryModule } from './generated/category/category.crud'
import { GroupModule } from './generated/group/group.crud'
import { TagModule } from './generated/tag/tag.crud'
import { MembershipModule } from './generated/membership/membership.crud'
import { ConversationModule } from './generated/conversation/conversation.crud'
import { AccountModule } from './generated/account/account.crud'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
    PostModule,
    CategoryModule,
    GroupModule,
    TagModule,
    MembershipModule,
    ConversationModule,
    AccountModule,
  ],
  providers: [PrismaService, { provide: PRISMA_CLIENT, useExisting: PrismaService }],
  exports: [PRISMA_CLIENT],
})
export class AppModule {}
