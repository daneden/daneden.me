import styled from "@emotion/styled"

import { Atoms } from "./designSystem"

export default styled("p")`
  & + & {
    text-indent: ${Atoms.spacing.medium};
  }
`
