import styled from "@emotion/styled"

import { Atoms } from "./designSystem"

export default styled("h2")`
  font-family: ${Atoms.font.family.serif};
  font-size: ${Atoms.font.size.h2};

  font-weight: 400;
  hyphens: initial;
  margin-bottom: ${Atoms.spacing.medium};
`
