import styled from "@emotion/styled"
import React from "react"
import { Atoms } from "./designSystem/designSystem"

const StyledWrapper = styled("div")`
  box-sizing: initial;
  margin: 0 auto;
  max-width: ${Atoms.widths.container};
`

export default function Wrapper(props) {
  return <StyledWrapper {...props} />
}
