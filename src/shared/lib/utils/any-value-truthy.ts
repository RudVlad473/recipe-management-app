export function anyValueTruthy<T>(obj: Record<string, T>) {
  const anyValueTruthy = Object.values(obj).filter((v) => v).length > 0

  return anyValueTruthy
}
