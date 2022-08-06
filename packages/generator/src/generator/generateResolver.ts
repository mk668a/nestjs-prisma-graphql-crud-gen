import path from 'path'
import { Project } from 'ts-morph'
import { DMMF } from './dmmf/types'
import { camelCase } from './helpers'

export const generateResolver = (project: Project, outputDir: string, model: DMMF.Model) => {
  const modelName = camelCase(model.name)
  const filePath = path.resolve(outputDir, `${modelName}/${modelName}.resolver.ts`)
  const sourceFile = project.createSourceFile(filePath, undefined, { overwrite: true })

  sourceFile.addStatements(`import * as NestJsGraphql from '@nestjs/graphql'
    import { ${model.name}Service } from './${modelName}.service'
    import { ${model.name} } from '../models/${modelName}.model'
    import { AffectedRowsOutput } from '../common/outputs/AffectedRowsOutput.output'
    import { Aggregate${model.name} } from './outputs/Aggregate${model.name}.output'
    import { ${model.name}GroupBy } from './outputs/${model.name}GroupBy.output'
    import {
      Aggregate${model.name}Args,
      CreateMany${model.name}Args,
      CreateOne${model.name}Args,
      DeleteMany${model.name}Args,
      DeleteOne${model.name}Args,
      FindFirst${model.name}Args,
      FindMany${model.name}Args,
      FindUnique${model.name}Args,
      GroupBy${model.name}Args,
      UpdateMany${model.name}Args,
      UpdateOne${model.name}Args,
      UpsertOne${model.name}Args
    } from './${modelName}.args'
    
    @NestJsGraphql.Resolver(() => ${model.name})
    export class ${model.name}Resolver {
      constructor(private readonly ${modelName}Service: ${model.name}Service) {}
    
      @NestJsGraphql.Query(() => ${model.name}, { nullable: false })
      findFirst${model.name}(@NestJsGraphql.Args() args: FindFirst${model.name}Args) {
        return this.${modelName}Service.findFirst(args)
      }
    
      @NestJsGraphql.Query(() => ${model.name}, { nullable: false })
      findUnique${model.name}(@NestJsGraphql.Args() args: FindUnique${model.name}Args) {
        return this.${modelName}Service.findUnique(args)
      }
    
      @NestJsGraphql.Query(() => [${model.name}], { nullable: false })
      findMany${model.name}(@NestJsGraphql.Args() args: FindMany${model.name}Args) {
        return this.${modelName}Service.findMany(args)
      }
    
      @NestJsGraphql.Query(() => [${model.name}GroupBy], { nullable: false })
      groupBy${model.name}(@NestJsGraphql.Args() args: GroupBy${model.name}Args) {
        return this.${modelName}Service.groupBy(args)
      }
    
      @NestJsGraphql.Query(() => Aggregate${model.name}, { nullable: false })
      aggregate${model.name}(@NestJsGraphql.Args() args: Aggregate${model.name}Args) {
        return this.${modelName}Service.aggregate(args)
      }
    
      @NestJsGraphql.Mutation(() => ${model.name}, { nullable: true })
      create${model.name}(@NestJsGraphql.Args() args: CreateOne${model.name}Args) {
        return this.${modelName}Service.create(args)
      }
    
      @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
      createMany${model.name}(@NestJsGraphql.Args() args: CreateMany${model.name}Args) {
        return this.${modelName}Service.createMany(args)
      }
    
      @NestJsGraphql.Mutation(() => ${model.name}, { nullable: true })
      update${model.name}(@NestJsGraphql.Args() args: UpdateOne${model.name}Args) {
        return this.${modelName}Service.update(args)
      }
    
      @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
      updateMany${model.name}(@NestJsGraphql.Args() args: UpdateMany${model.name}Args) {
        return this.${modelName}Service.updateMany(args)
      }
    
      @NestJsGraphql.Mutation(() => ${model.name}, { nullable: true })
      upsert${model.name}(@NestJsGraphql.Args() args: UpsertOne${model.name}Args) {
        return this.${modelName}Service.upsert(args)
      }
    
      @NestJsGraphql.Mutation(() => ${model.name}, { nullable: true })
      delete${model.name}(@NestJsGraphql.Args() args: DeleteOne${model.name}Args) {
        return this.${modelName}Service.delete(args)
      }
    
      @NestJsGraphql.Mutation(() => AffectedRowsOutput, { nullable: true })
      deleteMany${model.name}(@NestJsGraphql.Args() args: DeleteMany${model.name}Args) {
        return this.${modelName}Service.deleteMany(args)
      }
    }
  `)
}
