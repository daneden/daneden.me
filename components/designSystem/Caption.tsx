import { ReactElement } from "react"
import Small from "./Small"
export default function Caption({ children }): ReactElement {
  return (
    <figcaption>
      <Small display="block">{children}</Small>
    </figcaption>
  )
}
