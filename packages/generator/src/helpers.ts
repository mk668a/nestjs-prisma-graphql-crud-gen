// Prisma 7+ generator config values can be `string | string[] | undefined`.
// Our scalar options expect a single string; take the first array element if needed.
function scalarize(value: string | string[] | undefined): string | undefined {
  if (value === undefined) return undefined
  return Array.isArray(value) ? value[0] : value
}

export function parseStringBoolean(stringBoolean: string | string[] | undefined) {
  const v = scalarize(stringBoolean)
  return v ? v === 'true' : undefined
}

export function parseStringArray<TAllowedValue extends string>(
  stringArray: string | string[] | undefined,
  optionPropertyName: string,
  allowedValues?: TAllowedValue[],
): TAllowedValue[] | undefined {
  if (stringArray === undefined) {
    return undefined
  }
  const parsedArray = Array.isArray(stringArray)
    ? stringArray.flatMap((s) => s.split(',').map((it) => it.trim()))
    : stringArray.split(',').map((it) => it.trim())
  if (allowedValues) {
    for (const option of parsedArray) {
      if (!allowedValues.includes(option as any)) {
        throw new Error(`Invalid "${optionPropertyName}" option value "${option}" provided for NestJsGraphQL generator.`)
      }
    }
  }
  return parsedArray as TAllowedValue[]
}

export function parseString(value: string | string[] | undefined): string | undefined {
  return scalarize(value)
}
