import styled from "@emotion/styled"

import { Atoms } from "./designSystem"

export default styled("h2")`
  font-size: ${Atoms.font.size.h2};
  font-weight: 400;
  hyphens: initial;
  letter-spacing: -0.025em;
  margin-bottom: ${Atoms.spacing.medium};
  padding-top: ${Atoms.spacing.small};
`
