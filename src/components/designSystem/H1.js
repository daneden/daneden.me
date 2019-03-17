import styled from "@emotion/styled"

import Atoms from "./atoms"

export default styled("h1")`
  font-size: ${Atoms.font.size.h1};
  font-weight: 400;
  hyphens: initial;
  letter-spacing: -0.025em;
  margin-bottom: ${Atoms.spacing.medium};
  padding-bottom: ${Atoms.spacing.xlarge};
  padding-top: ${Atoms.spacing.xlarge};
`
