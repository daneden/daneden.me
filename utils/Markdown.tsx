import { Link } from "@/designSystem"
import { ReactElement } from "react"
import ReactMarkdown from "react-markdown"

export default function Markdown({
  children,
}): ReactElement<typeof ReactMarkdown> {
  const renderers = {
    link: Link,
  }
  return <ReactMarkdown source={children} renderers={renderers} />
}
