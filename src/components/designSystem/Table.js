import styled from "react-emotion"

import { Atoms } from "./designSystem"

export default styled("table")`
  th {
    font-weight: normal;
    font-family: ${Atoms.font.family.sans};
  }

  th,
  td {
    vertical-align: top;
    padding-bottom: ${Atoms.spacing.xsmall};
    padding-left: ${Atoms.spacing.xsmall};
    padding-right: ${Atoms.spacing.xsmall};
  }
`
