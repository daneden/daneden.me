import styled from "react-emotion"

import Atoms from "./atoms"

export default styled("h1")`
  font-family: ${Atoms.font.family.sans};
  font-size: 6vw;
  font-weight: 400;
  letter-spacing: -0.015em;
  line-height: 1;
  margin-bottom: ${Atoms.spacing.medium};
  margin-left: -0.075em;
  margin-right: -0.075em;
`
