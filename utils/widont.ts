export default function widont(subject: string): string {
  return subject.replace(/ ([^ ]*)$/, "\u00A0$1")
}
