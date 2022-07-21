import { Module } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { PostResolver } from './post.resolver'
import { PostService } from './post.service'

@Module({
  providers: [PostResolver, PostService, PrismaService]
})
export class PostModule { }

