import { Field, Float, ID, InputType, Int, registerEnumType } from '@nestjs/graphql'
import { GraphQLISODateTime } from '@nestjs/graphql'

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
registerEnumType(SortOrder, { name: 'SortOrder' })

export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}
registerEnumType(QueryMode, { name: 'QueryMode' })

@InputType('NestedStringFilter', { isAbstract: true })
export class NestedStringFilter {
  @Field(() => String, { nullable: true }) equals?: string
  @Field(() => [String], { nullable: true }) in?: string[]
  @Field(() => [String], { nullable: true }) notIn?: string[]
  @Field(() => String, { nullable: true }) lt?: string
  @Field(() => String, { nullable: true }) lte?: string
  @Field(() => String, { nullable: true }) gt?: string
  @Field(() => String, { nullable: true }) gte?: string
  @Field(() => String, { nullable: true }) contains?: string
  @Field(() => String, { nullable: true }) startsWith?: string
  @Field(() => String, { nullable: true }) endsWith?: string
  @Field(() => NestedStringFilter, { nullable: true }) not?: NestedStringFilter
}

@InputType('StringFilter', { isAbstract: true })
export class StringFilter extends NestedStringFilter {
  @Field(() => QueryMode, { nullable: true }) mode?: QueryMode
}

@InputType('NestedStringNullableFilter', { isAbstract: true })
export class NestedStringNullableFilter {
  @Field(() => String, { nullable: true }) equals?: string | null
  @Field(() => [String], { nullable: true }) in?: string[] | null
  @Field(() => [String], { nullable: true }) notIn?: string[] | null
  @Field(() => String, { nullable: true }) lt?: string
  @Field(() => String, { nullable: true }) lte?: string
  @Field(() => String, { nullable: true }) gt?: string
  @Field(() => String, { nullable: true }) gte?: string
  @Field(() => String, { nullable: true }) contains?: string
  @Field(() => String, { nullable: true }) startsWith?: string
  @Field(() => String, { nullable: true }) endsWith?: string
  @Field(() => NestedStringNullableFilter, { nullable: true }) not?: NestedStringNullableFilter
}

@InputType('StringNullableFilter', { isAbstract: true })
export class StringNullableFilter extends NestedStringNullableFilter {
  @Field(() => QueryMode, { nullable: true }) mode?: QueryMode
}

@InputType('IntFilter', { isAbstract: true })
export class IntFilter {
  @Field(() => Int, { nullable: true }) equals?: number
  @Field(() => [Int], { nullable: true }) in?: number[]
  @Field(() => [Int], { nullable: true }) notIn?: number[]
  @Field(() => Int, { nullable: true }) lt?: number
  @Field(() => Int, { nullable: true }) lte?: number
  @Field(() => Int, { nullable: true }) gt?: number
  @Field(() => Int, { nullable: true }) gte?: number
  @Field(() => IntFilter, { nullable: true }) not?: IntFilter
}

@InputType('IntNullableFilter', { isAbstract: true })
export class IntNullableFilter {
  @Field(() => Int, { nullable: true }) equals?: number | null
  @Field(() => [Int], { nullable: true }) in?: number[] | null
  @Field(() => [Int], { nullable: true }) notIn?: number[] | null
  @Field(() => Int, { nullable: true }) lt?: number
  @Field(() => Int, { nullable: true }) lte?: number
  @Field(() => Int, { nullable: true }) gt?: number
  @Field(() => Int, { nullable: true }) gte?: number
  @Field(() => IntNullableFilter, { nullable: true }) not?: IntNullableFilter
}

@InputType('FloatFilter', { isAbstract: true })
export class FloatFilter {
  @Field(() => Float, { nullable: true }) equals?: number
  @Field(() => [Float], { nullable: true }) in?: number[]
  @Field(() => [Float], { nullable: true }) notIn?: number[]
  @Field(() => Float, { nullable: true }) lt?: number
  @Field(() => Float, { nullable: true }) lte?: number
  @Field(() => Float, { nullable: true }) gt?: number
  @Field(() => Float, { nullable: true }) gte?: number
  @Field(() => FloatFilter, { nullable: true }) not?: FloatFilter
}

@InputType('BoolFilter', { isAbstract: true })
export class BoolFilter {
  @Field(() => Boolean, { nullable: true }) equals?: boolean
  @Field(() => BoolFilter, { nullable: true }) not?: BoolFilter
}

@InputType('BoolNullableFilter', { isAbstract: true })
export class BoolNullableFilter {
  @Field(() => Boolean, { nullable: true }) equals?: boolean | null
  @Field(() => BoolNullableFilter, { nullable: true }) not?: BoolNullableFilter
}

@InputType('DateTimeFilter', { isAbstract: true })
export class DateTimeFilter {
  @Field(() => GraphQLISODateTime, { nullable: true }) equals?: Date
  @Field(() => [GraphQLISODateTime], { nullable: true }) in?: Date[]
  @Field(() => [GraphQLISODateTime], { nullable: true }) notIn?: Date[]
  @Field(() => GraphQLISODateTime, { nullable: true }) lt?: Date
  @Field(() => GraphQLISODateTime, { nullable: true }) lte?: Date
  @Field(() => GraphQLISODateTime, { nullable: true }) gt?: Date
  @Field(() => GraphQLISODateTime, { nullable: true }) gte?: Date
  @Field(() => DateTimeFilter, { nullable: true }) not?: DateTimeFilter
}

@InputType('DateTimeNullableFilter', { isAbstract: true })
export class DateTimeNullableFilter {
  @Field(() => GraphQLISODateTime, { nullable: true }) equals?: Date | null
  @Field(() => [GraphQLISODateTime], { nullable: true }) in?: Date[] | null
  @Field(() => [GraphQLISODateTime], { nullable: true }) notIn?: Date[] | null
  @Field(() => GraphQLISODateTime, { nullable: true }) lt?: Date
  @Field(() => GraphQLISODateTime, { nullable: true }) lte?: Date
  @Field(() => GraphQLISODateTime, { nullable: true }) gt?: Date
  @Field(() => GraphQLISODateTime, { nullable: true }) gte?: Date
  @Field(() => DateTimeNullableFilter, { nullable: true }) not?: DateTimeNullableFilter
}

// Re-export ID for convenience
export { ID }
