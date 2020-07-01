import { ReactElement } from "react"
import Small from "./Small"
export default function Caption({ children }): ReactElement<typeof Small> {
  return (
    <Small as="figcaption" display="block">
      {children}
    </Small>
  )
}
