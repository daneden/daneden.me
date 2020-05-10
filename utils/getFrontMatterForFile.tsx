import matter from "gray-matter"

export interface FrontMatter {
  title: string
  date?: string
  hidden?: boolean
}
export default function getFrontMatterForFile(path): FrontMatter {
  return matter.read(path).data as FrontMatter
}
