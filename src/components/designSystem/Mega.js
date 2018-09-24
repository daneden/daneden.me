import styled from "react-emotion"

import Atoms from "./atoms"

export default styled("h1")`
  font-family: ${Atoms.font.family.sans};
  font-size: 6vw;
  letter-spacing: -0.015em;
  line-height: 1;
  margin-bottom: ${Atoms.spacing.large};
`
