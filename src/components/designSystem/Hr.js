import styled from "@emotion/styled"

import { Atoms } from "./designSystem"

export default styled("hr")`
  border: 2px solid;
  content: "";
  display: block;
  height: 1px;
  margin: ${Atoms.spacing.large} 0;
`
