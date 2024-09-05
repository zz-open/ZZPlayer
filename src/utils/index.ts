export function extractValue(input: string) {
  const valueRegex = /\("(\S+)"\)/
  const match = valueRegex.exec(input)
  return match ? match[1] : ''
}
