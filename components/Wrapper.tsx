/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { ReactElement, ReactNode } from "react"
import { Atoms } from "./designSystem"

interface WrapperProps {
  id?: string
  children: ReactNode[]
}

const StyledWrapper = styled("div")`
  box-sizing: initial;
  margin: 0 auto;
  max-width: ${Atoms.widths.container};

  :focus {
    outline: none;
  }
`

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
