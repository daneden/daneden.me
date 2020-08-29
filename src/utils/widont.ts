export default function widont(subject: string): string {
  const words = subject.split(" ")
  const lastTwo = words.slice(-2).join(" ")

  if (lastTwo.length >= 15) {
    return subject
  } else {
    return subject.replace(/ ([^ ]*)$/, "\u00A0$1")
  }
}
