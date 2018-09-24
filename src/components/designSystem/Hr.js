import styled from "react-emotion"

import { Atoms } from "./designSystem"

export default styled("hr")`
  border: 0;
  content: "";
  display: block;
  height: 1px;
  margin: ${Atoms.spacing.medium} 0;
`
