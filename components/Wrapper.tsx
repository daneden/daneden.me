import cxs from "cxs/component"
import { ReactElement, ReactNode } from "react"
import { Atoms } from "./designSystem"

interface WrapperProps {
  id?: string
  children: ReactNode[]
}

const StyledWrapper = cxs("div")({
  boxSizing: "initial",
  margin: "0 auto",
  maxWidth: Atoms.widths.container,

  ":focus": {
    outline: "none",
  },
})

export default function Wrapper({
  id = "content",
  children,
}: WrapperProps): ReactElement<typeof StyledWrapper> {
  return (
    <StyledWrapper id={id} role="region" tabIndex={-1}>
      {children}
    </StyledWrapper>
  )
}
