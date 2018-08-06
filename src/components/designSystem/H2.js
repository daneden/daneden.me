import styled from "react-emotion"

import { Atoms } from "./designSystem"

export default styled("h2")`
  font-family: ${Atoms.font.family.sans};
  font-size: 1.111rem;
  font-weight: 400;
  hyphens: initial;
  margin-bottom: ${Atoms.spacing.medium};
`
