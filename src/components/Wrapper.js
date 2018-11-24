import React from "react"
import styled from "react-emotion"

const StyledWrapper = styled("div")`
  box-sizing: initial;
  margin: 0 auto;
  max-width: 34rem;
`

export default function Wrapper(props) {
  return <StyledWrapper {...props} />
}
