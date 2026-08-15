export const generatePassword = (size: number) => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'

  const array = new Uint32Array(size)
  crypto.getRandomValues(array)

  return Array.from(array, (x) => chars[x % chars.length]).join('')
}
