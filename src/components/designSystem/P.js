import styled from "react-emotion"

import { Atoms } from "./designSystem"

export default styled("p")`
  & + & {
    text-indent: ${Atoms.spacing.medium};
  }
`
