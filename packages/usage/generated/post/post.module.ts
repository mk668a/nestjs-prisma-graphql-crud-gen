import { Module } from '@nestjs/common'
import { PostService } from './post.service'
import { PostResolver } from './post.resolver'
import { PrismaService } from '../../prisma.service'

@Module({
  providers: [PostResolver, PostService, PrismaService]
})
export class PostModule { }

