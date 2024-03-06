export function truncate(str: string, numWords: number): string {
  const words = str.split(" ")
  if (words.length > numWords) {
    return words.slice(0, numWords).join(" ") + "..."
  } else {
    return str
  }
}

export function truncateChars(str: string, numChars: number): string {
  if (str.length > numChars) {
    return str.slice(0, numChars) + "..."
  } else {
    return str
  }
}
