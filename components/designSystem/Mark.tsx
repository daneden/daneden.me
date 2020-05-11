import styled from "@emotion/styled"
import { Atoms } from "."

export default styled("mark")`
  background-color: ${Atoms.colors.mark};
  border-radius: ${Atoms.spacing.xxsmall};
  color: inherit;
  margin-left: -${Atoms.spacing.xxsmall};
  margin-right: -${Atoms.spacing.xxsmall};
  padding-left: ${Atoms.spacing.xxsmall};
  padding-right: ${Atoms.spacing.xxsmall};
`
