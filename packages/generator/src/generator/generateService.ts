import path from 'path'
import { Project } from 'ts-morph'
import { DMMF } from './dmmf/types'
import { camelCase } from './helpers'

export const generateService = (project: Project, outputDir: string, model: DMMF.Model) => {
  const modelName = camelCase(model.name)
  const filePath = path.resolve(outputDir, `${modelName}/${modelName}.service.ts`)
  const sourceFile = project.createSourceFile(filePath, undefined, { overwrite: true })

  sourceFile.addStatements(`import { Injectable } from '@nestjs/common';
    import { PrismaService } from '../../prisma.service';
    import { Prisma } from '@prisma/client';
    
    @Injectable()
    export class ${model.name}Service {
        constructor(private prisma: PrismaService) {}
    
        async findFirst(args: Prisma.${model.name}FindFirstArgs) {
        return await this.prisma.${modelName}.findFirst(args)
        }
    
        findUnique(args: Prisma.${model.name}FindUniqueArgs) {
        return this.prisma.${modelName}.findUnique(args)
        }
    
        findMany(args: Prisma.${model.name}FindManyArgs) {
        return this.prisma.${modelName}.findMany(args)
        }
    
        groupBy(args: Prisma.${model.name}GroupByArgs) {
        // @ts-ignore
        return this.prisma.${modelName}.groupBy(args)
        }
    
        aggregate(args: Prisma.${model.name}AggregateArgs) {
        return this.prisma.${modelName}.aggregate(args)
        }
    
        create(args: Prisma.${model.name}CreateArgs) {
        return this.prisma.${modelName}.create(args)
        }
    
        createMany(args: Prisma.${model.name}CreateManyArgs) {
        return this.prisma.${modelName}.createMany(args)
        }
    
        update(args: Prisma.${model.name}UpdateArgs) {
        return this.prisma.${modelName}.update(args)
        }
    
        updateMany(args: Prisma.${model.name}UpdateManyArgs) {
        return this.prisma.${modelName}.updateMany(args)
        }
    
        upsert(args: Prisma.${model.name}UpsertArgs) {
        return this.prisma.${modelName}.upsert(args)
        }
    
        delete(args: Prisma.${model.name}DeleteArgs) {
        return this.prisma.${modelName}.delete(args)
        }
    
        deleteMany(args: Prisma.${model.name}DeleteManyArgs) {
        return this.prisma.${modelName}.deleteMany(args)
        }
    }`)
}
