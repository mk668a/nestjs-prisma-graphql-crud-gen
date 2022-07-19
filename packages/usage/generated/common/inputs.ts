import * as NestJsGraphQL from "@nestjs/graphql";
import { SortOrder, QueryMode } from "./enums";

@NestJsGraphQL.InputType('StringFilter', { isAbstract: true })
export class StringFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: string[] | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: string[] | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  contains?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  startsWith?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  endsWith?: string | undefined;

  @NestJsGraphQL.Field(() => QueryMode, { nullable: true })
  mode?: "default" | "insensitive" | undefined;

  @NestJsGraphQL.Field(() => NestedStringFilter, { nullable: true })
  not?: NestedStringFilter | undefined;
}

@NestJsGraphQL.InputType('StringNullableFilter', { isAbstract: true })
export class StringNullableFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: string[] | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: string[] | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  contains?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  startsWith?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  endsWith?: string | undefined;

  @NestJsGraphQL.Field(() => QueryMode, { nullable: true })
  mode?: "default" | "insensitive" | undefined;

  @NestJsGraphQL.Field(() => NestedStringNullableFilter, { nullable: true })
  not?: NestedStringNullableFilter | undefined;
}

@NestJsGraphQL.InputType('DateTimeFilter', { isAbstract: true })
export class DateTimeFilter {
  @NestJsGraphQL.Field(() => Date, { nullable: true })
  equals?: Date | undefined;

  @NestJsGraphQL.Field(() => [Date], { nullable: true })
  in?: Date[] | undefined;

  @NestJsGraphQL.Field(() => [Date], { nullable: true })
  notIn?: Date[] | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  lt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  lte?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  gt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  gte?: Date | undefined;

  @NestJsGraphQL.Field(() => NestedDateTimeFilter, { nullable: true })
  not?: NestedDateTimeFilter | undefined;
}

@NestJsGraphQL.InputType('StringWithAggregatesFilter', { isAbstract: true })
export class StringWithAggregatesFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: string[] | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: string[] | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  contains?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  startsWith?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  endsWith?: string | undefined;

  @NestJsGraphQL.Field(() => QueryMode, { nullable: true })
  mode?: "default" | "insensitive" | undefined;

  @NestJsGraphQL.Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: NestedStringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedStringFilter, { nullable: true })
  _min?: NestedStringFilter | undefined;

  @NestJsGraphQL.Field(() => NestedStringFilter, { nullable: true })
  _max?: NestedStringFilter | undefined;
}

@NestJsGraphQL.InputType('StringNullableWithAggregatesFilter', { isAbstract: true })
export class StringNullableWithAggregatesFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: string[] | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: string[] | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  contains?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  startsWith?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  endsWith?: string | undefined;

  @NestJsGraphQL.Field(() => QueryMode, { nullable: true })
  mode?: "default" | "insensitive" | undefined;

  @NestJsGraphQL.Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: NestedStringNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: NestedStringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: NestedStringNullableFilter | undefined;
}

@NestJsGraphQL.InputType('DateTimeWithAggregatesFilter', { isAbstract: true })
export class DateTimeWithAggregatesFilter {
  @NestJsGraphQL.Field(() => Date, { nullable: true })
  equals?: Date | undefined;

  @NestJsGraphQL.Field(() => [Date], { nullable: true })
  in?: Date[] | undefined;

  @NestJsGraphQL.Field(() => [Date], { nullable: true })
  notIn?: Date[] | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  lt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  lte?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  gt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  gte?: Date | undefined;

  @NestJsGraphQL.Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: NestedDateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedDateTimeFilter, { nullable: true })
  _min?: NestedDateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => NestedDateTimeFilter, { nullable: true })
  _max?: NestedDateTimeFilter | undefined;
}

@NestJsGraphQL.InputType('BoolFilter', { isAbstract: true })
export class BoolFilter {
  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @NestJsGraphQL.Field(() => NestedBoolFilter, { nullable: true })
  not?: NestedBoolFilter | undefined;
}

@NestJsGraphQL.InputType('BoolWithAggregatesFilter', { isAbstract: true })
export class BoolWithAggregatesFilter {
  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @NestJsGraphQL.Field(() => NestedBoolWithAggregatesFilter, { nullable: true })
  not?: NestedBoolWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedBoolFilter, { nullable: true })
  _min?: NestedBoolFilter | undefined;

  @NestJsGraphQL.Field(() => NestedBoolFilter, { nullable: true })
  _max?: NestedBoolFilter | undefined;
}

@NestJsGraphQL.InputType('StringFieldUpdateOperationsInput', { isAbstract: true })
export class StringFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  set?: string | undefined;
}

@NestJsGraphQL.InputType('NullableStringFieldUpdateOperationsInput', { isAbstract: true })
export class NullableStringFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  set?: string | undefined;
}

@NestJsGraphQL.InputType('DateTimeFieldUpdateOperationsInput', { isAbstract: true })
export class DateTimeFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => Date, { nullable: true })
  set?: Date | undefined;
}

@NestJsGraphQL.InputType('BoolFieldUpdateOperationsInput', { isAbstract: true })
export class BoolFieldUpdateOperationsInput {
  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  set?: boolean | undefined;
}

@NestJsGraphQL.InputType('NestedStringFilter', { isAbstract: true })
export class NestedStringFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: string[] | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: string[] | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  contains?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  startsWith?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  endsWith?: string | undefined;

  @NestJsGraphQL.Field(() => NestedStringFilter, { nullable: true })
  not?: NestedStringFilter | undefined;
}

@NestJsGraphQL.InputType('NestedStringNullableFilter', { isAbstract: true })
export class NestedStringNullableFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: string[] | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: string[] | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  contains?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  startsWith?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  endsWith?: string | undefined;

  @NestJsGraphQL.Field(() => NestedStringNullableFilter, { nullable: true })
  not?: NestedStringNullableFilter | undefined;
}

@NestJsGraphQL.InputType('NestedDateTimeFilter', { isAbstract: true })
export class NestedDateTimeFilter {
  @NestJsGraphQL.Field(() => Date, { nullable: true })
  equals?: Date | undefined;

  @NestJsGraphQL.Field(() => [Date], { nullable: true })
  in?: Date[] | undefined;

  @NestJsGraphQL.Field(() => [Date], { nullable: true })
  notIn?: Date[] | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  lt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  lte?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  gt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  gte?: Date | undefined;

  @NestJsGraphQL.Field(() => NestedDateTimeFilter, { nullable: true })
  not?: NestedDateTimeFilter | undefined;
}

@NestJsGraphQL.InputType('NestedStringWithAggregatesFilter', { isAbstract: true })
export class NestedStringWithAggregatesFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: string[] | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: string[] | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  contains?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  startsWith?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  endsWith?: string | undefined;

  @NestJsGraphQL.Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: NestedStringWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedStringFilter, { nullable: true })
  _min?: NestedStringFilter | undefined;

  @NestJsGraphQL.Field(() => NestedStringFilter, { nullable: true })
  _max?: NestedStringFilter | undefined;
}

@NestJsGraphQL.InputType('NestedIntFilter', { isAbstract: true })
export class NestedIntFilter {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  equals?: number | undefined;

  @NestJsGraphQL.Field(() => [NestJsGraphQL.Int], { nullable: true })
  in?: number[] | undefined;

  @NestJsGraphQL.Field(() => [NestJsGraphQL.Int], { nullable: true })
  notIn?: number[] | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  lt?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  lte?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  gt?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  gte?: number | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  not?: NestedIntFilter | undefined;
}

@NestJsGraphQL.InputType('NestedStringNullableWithAggregatesFilter', { isAbstract: true })
export class NestedStringNullableWithAggregatesFilter {
  @NestJsGraphQL.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  in?: string[] | undefined;

  @NestJsGraphQL.Field(() => [String], { nullable: true })
  notIn?: string[] | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  lte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gt?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  gte?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  contains?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  startsWith?: string | undefined;

  @NestJsGraphQL.Field(() => String, { nullable: true })
  endsWith?: string | undefined;

  @NestJsGraphQL.Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: NestedStringNullableWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter | undefined;

  @NestJsGraphQL.Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: NestedStringNullableFilter | undefined;

  @NestJsGraphQL.Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: NestedStringNullableFilter | undefined;
}

@NestJsGraphQL.InputType('NestedIntNullableFilter', { isAbstract: true })
export class NestedIntNullableFilter {
  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  equals?: number | undefined;

  @NestJsGraphQL.Field(() => [NestJsGraphQL.Int], { nullable: true })
  in?: number[] | undefined;

  @NestJsGraphQL.Field(() => [NestJsGraphQL.Int], { nullable: true })
  notIn?: number[] | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  lt?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  lte?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  gt?: number | undefined;

  @NestJsGraphQL.Field(() => NestJsGraphQL.Int, { nullable: true })
  gte?: number | undefined;

  @NestJsGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  not?: NestedIntNullableFilter | undefined;
}

@NestJsGraphQL.InputType('NestedDateTimeWithAggregatesFilter', { isAbstract: true })
export class NestedDateTimeWithAggregatesFilter {
  @NestJsGraphQL.Field(() => Date, { nullable: true })
  equals?: Date | undefined;

  @NestJsGraphQL.Field(() => [Date], { nullable: true })
  in?: Date[] | undefined;

  @NestJsGraphQL.Field(() => [Date], { nullable: true })
  notIn?: Date[] | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  lt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  lte?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  gt?: Date | undefined;

  @NestJsGraphQL.Field(() => Date, { nullable: true })
  gte?: Date | undefined;

  @NestJsGraphQL.Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: NestedDateTimeWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedDateTimeFilter, { nullable: true })
  _min?: NestedDateTimeFilter | undefined;

  @NestJsGraphQL.Field(() => NestedDateTimeFilter, { nullable: true })
  _max?: NestedDateTimeFilter | undefined;
}

@NestJsGraphQL.InputType('NestedBoolFilter', { isAbstract: true })
export class NestedBoolFilter {
  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @NestJsGraphQL.Field(() => NestedBoolFilter, { nullable: true })
  not?: NestedBoolFilter | undefined;
}

@NestJsGraphQL.InputType('NestedBoolWithAggregatesFilter', { isAbstract: true })
export class NestedBoolWithAggregatesFilter {
  @NestJsGraphQL.Field(() => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @NestJsGraphQL.Field(() => NestedBoolWithAggregatesFilter, { nullable: true })
  not?: NestedBoolWithAggregatesFilter | undefined;

  @NestJsGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @NestJsGraphQL.Field(() => NestedBoolFilter, { nullable: true })
  _min?: NestedBoolFilter | undefined;

  @NestJsGraphQL.Field(() => NestedBoolFilter, { nullable: true })
  _max?: NestedBoolFilter | undefined;
}
