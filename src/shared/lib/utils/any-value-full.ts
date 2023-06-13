function isValueFull<T>(value: T): boolean {
  if (typeof value === "string") {
    return value.length > 0
  } else if (typeof value === "number") {
    return value !== 0
  } else if (typeof value === "boolean") {
    return true
  } else if (Array.isArray(value)) {
    return value.length > 0
  } else if (typeof value === "object") {
    return Object.keys(value).length > 0
  } else {
    throw new Error("Unsupported type")
  }
}

export function anyValueFull<T>(obj: Record<string, T>) {
  const anyValueFull = Object.values(obj).filter(isValueFull).length > 0

  return anyValueFull
}
