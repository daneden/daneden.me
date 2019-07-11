import styled from "@emotion/styled"

import { Atoms } from "./designSystem"

const PlainList = styled("ul")`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: ${props => (props.inline ? "inline-block" : "block")};
  }
`

export default PlainList
