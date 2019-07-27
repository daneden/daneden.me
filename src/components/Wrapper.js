import styled from "@emotion/styled"
import { Atoms } from "designSystem/designSystem"
import React from "react"

const StyledWrapper = styled("div")`
  box-sizing: initial;
  margin: 0 auto;
  max-width: ${Atoms.widths.container};
`

export default function Wrapper(props) {
  return <StyledWrapper {...props} />
}
