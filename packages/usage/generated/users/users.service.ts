import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async findFirst(args: Prisma.UsersFindFirstArgs) {
    return await this.prisma.users.findFirst(args)
  }

  findUnique(args: Prisma.UsersFindUniqueArgs) {
    return this.prisma.users.findUnique(args)
  }

  findMany(args: Prisma.UsersFindManyArgs) {
    return this.prisma.users.findMany(args)
  }

  groupBy(args: Prisma.UsersGroupByArgs) {
    // @ts-ignore
    return this.prisma.users.groupBy(args)
  }

  aggregate(args: Prisma.UsersAggregateArgs) {
    return this.prisma.users.aggregate(args)
  }

  create(args: Prisma.UsersCreateArgs) {
    return this.prisma.users.create(args)
  }

  createMany(args: Prisma.UsersCreateManyArgs) {
    return this.prisma.users.createMany(args)
  }

  update(args: Prisma.UsersUpdateArgs) {
    return this.prisma.users.update(args)
  }

  updateMany(args: Prisma.UsersUpdateManyArgs) {
    return this.prisma.users.updateMany(args)
  }

  upsert(args: Prisma.UsersUpsertArgs) {
    return this.prisma.users.upsert(args)
  }

  delete(args: Prisma.UsersDeleteArgs) {
    return this.prisma.users.delete(args)
  }

  deleteMany(args: Prisma.UsersDeleteManyArgs) {
    return this.prisma.users.deleteMany(args)
  }
}
