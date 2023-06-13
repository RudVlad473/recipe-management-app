export function getDefaultValue<T>(value: T): T {
  console.log({ value })

  if (typeof value === "string") {
    return "" as T
  } else if (typeof value === "number") {
    return 0 as T
  } else if (typeof value === "boolean") {
    return false as T
  } else if (Array.isArray(value)) {
    return [] as T
  } else if (typeof value === "object") {
    return {} as T
  } else {
    throw new Error("Unsupported type")
  }
}
