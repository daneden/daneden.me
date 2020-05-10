import { ReactElement } from "react"
import ReactMarkdown from "react-markdown"
import { Link } from "../components/designSystem/designSystem"

export default function Markdown({
  children,
}): ReactElement<typeof ReactMarkdown> {
  const renderers = {
    link: Link,
  }
  return <ReactMarkdown source={children} renderers={renderers} />
}
