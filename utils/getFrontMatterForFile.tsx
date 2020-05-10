import matter from "gray-matter"

export default function getFrontMatterForFile(path) {
  return matter.read(path).data
}
