export default function customRespone<T>(code: string, data: T, msg?: string) {
  return {
    code,
    data,
    msg
  }
}
