import styled from "@emotion/styled"

import { Atoms } from "./designSystem"

export default styled("code")`
  padding: 0.1em 0.5em;
  vertical-align: baseline;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  font-family: ${Atoms.font.family.sans};
  line-height: 1;
  letter-spacing: -0.025em;
`
