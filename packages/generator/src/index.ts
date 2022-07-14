#!/usr/bin/env node

import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper'
import { logger } from '@prisma/sdk'
import path from 'path'
import { GENERATOR_NAME } from './constants'
import { genEnum } from './helpers/genEnum'
import { writeFileSafely } from './utils/writeFileSafely'

generatorHandler({
  onManifest() {
    logger.info(`${GENERATOR_NAME}:Registered`)
    return {
      defaultOutput: '../generated',
      prettyName: GENERATOR_NAME,
    }
  },
  onGenerate: async (options: GeneratorOptions) => {
    const output = options.generator.output?.value

    if (output) {
      options.dmmf.datamodel.enums.forEach(async (enumInfo) => {
        const tsEnum = genEnum(enumInfo)

        const writeLocation = path.join(output, `${enumInfo.name}.ts`)

        try {
          await writeFileSafely(writeLocation, tsEnum)
        } catch (e) {
          console.error('Error: unable to write files for nestjs-prisma-graphql-crud-gen')
          throw e
        }
      })
    } else {
      throw new Error('No output was specified for nestjs-prisma-graphql-crud-gen')
    }
  },
})
