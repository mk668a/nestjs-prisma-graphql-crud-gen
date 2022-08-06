import * as NestJsGraphql from '@nestjs/graphql'
import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
import { Post } from '../models/post.model'
import { AggregatePost } from './outputs/AggregatePost.output'
import { PostGroupBy } from './outputs/PostGroupBy.output'
import {
  AggregatePostArgs,
  CreateManyPostArgs,
  CreateOnePostArgs,
  DeleteManyPostArgs,
  DeleteOnePostArgs,
  FindFirstPostArgs,
  FindManyPostArgs,
  FindUniquePostArgs,
  GroupByPostArgs,
  UpdateManyPostArgs,
  UpdateOnePostArgs,
  UpsertOnePostArgs
} from './post.args'
import { PostService } from './post.service'

@NestJsGraphql.Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) { }

  @NestJsGraphql.Query(() => Post, { nullable: false })
  findFirstPost(@NestJsGraphql.Args() args: FindFirstPostArgs) {
    return this.postService.findFirst(args)
  }

  @NestJsGraphql.Query(() => Post, { nullable: false })
  findUniquePost(@NestJsGraphql.Args() args: FindUniquePostArgs) {
    return this.postService.findUnique(args)
  }

  @NestJsGraphql.Query(() => [Post], { nullable: false })
  findManyPost(@NestJsGraphql.Args() args: FindManyPostArgs) {
    return this.postService.findMany(args)
  }

  @NestJsGraphql.Query(() => [PostGroupBy], { nullable: false })
  groupByPost(@NestJsGraphql.Args() args: GroupByPostArgs) {
    return this.postService.groupBy(args)
  }

  @NestJsGraphql.Query(() => AggregatePost, { nullable: false })
  aggregatePost(@NestJsGraphql.Args() args: AggregatePostArgs) {
    return this.postService.aggregate(args)
  }

  @NestJsGraphql.Mutation(() => Post, { nullable: true })
  createPost(@NestJsGraphql.Args() args: CreateOnePostArgs) {
    return this.postService.create(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  createManyPost(@NestJsGraphql.Args() args: CreateManyPostArgs) {
    return this.postService.createMany(args)
  }

  @NestJsGraphql.Mutation(() => Post, { nullable: true })
  updatePost(@NestJsGraphql.Args() args: UpdateOnePostArgs) {
    return this.postService.update(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  updateManyPost(@NestJsGraphql.Args() args: UpdateManyPostArgs) {
    return this.postService.updateMany(args)
  }

  @NestJsGraphql.Mutation(() => Post, { nullable: true })
  upsertPost(@NestJsGraphql.Args() args: UpsertOnePostArgs) {
    return this.postService.upsert(args)
  }

  @NestJsGraphql.Mutation(() => Post, { nullable: true })
  deletePost(@NestJsGraphql.Args() args: DeleteOnePostArgs) {
    return this.postService.delete(args)
  }

  @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
  deleteManyPost(@NestJsGraphql.Args() args: DeleteManyPostArgs) {
    return this.postService.deleteMany(args)
  }
}

