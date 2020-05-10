import styled from "@emotion/styled"
import { Atoms } from "./designSystem"

export default styled("table")`
  hyphens: initial;
  margin-bottom: ${Atoms.spacing.medium};

  th {
    font-weight: normal;
    font-family: ${Atoms.font.family.mono};
  }

  th,
  td {
    vertical-align: top;
    padding-bottom: ${Atoms.spacing.xsmall};
    padding-left: ${Atoms.spacing.xsmall};
    padding-right: ${Atoms.spacing.xsmall};
  }
`
