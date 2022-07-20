import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersResolver } from './users.resolver'
import { PrismaService } from '../../prisma.service'

@Module({
  providers: [UsersResolver, UsersService, PrismaService]
})
export class UsersModule { }

