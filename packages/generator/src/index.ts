#!/usr/bin/env node

import { generatorHandler } from '@prisma/generator-helper'
import { logger } from '@prisma/sdk'
import { generate } from './generator'

const GENERATOR_NAME = 'nestjs-prisma-graphql-crud-gen'

generatorHandler({
  onManifest() {
    logger.info(`${GENERATOR_NAME}:Registered`)
    return {
      defaultOutput: '../generated',
      prettyName: GENERATOR_NAME,
    }
  },
  onGenerate: generate,
})
