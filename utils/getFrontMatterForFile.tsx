import matter from "gray-matter"

export interface FrontMatter {
  title: string
  date?: string
  hidden?: boolean
  excerpt: string
}

function firstFourLines(file, options): string {
  const result = file.content
    .split("\n")
    .map((s: string) => s.replace(/(\<.*\>)?(.*)(\<.*\/\>)?/, "$2"))
    .filter((s: string) => !/(import|export)/.test(s))
    .map((s: string) => s.replace('{" "}', " "))
    .map((s: string) => s.trim())
    .filter((s: string) => s !== "")
    .slice(0, 5)
    .join(" ")

  file.excerpt = result + "..."
  return result
}
export default function getFrontMatterForFile(path): FrontMatter {
  const result = matter.read(path, { excerpt: true })
  return {
    ...result.data,
    excerpt: result.data?.excerpt || result.excerpt,
  } as FrontMatter
}
