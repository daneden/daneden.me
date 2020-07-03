import { ReactNode } from "react"
import Small from "./Small"
export default function Caption({ children }: { children: ReactNode }) {
  return (
    <figcaption>
      <Small display="block">{children}</Small>
    </figcaption>
  )
}
