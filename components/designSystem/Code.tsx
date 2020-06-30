import styled from "@emotion/styled"
import { Atoms } from "."

export default styled("code")`
  padding: 0.1em 0.25em;
  vertical-align: baseline;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0.35em;
  font-family: ${Atoms.font.family.mono};
  font-size: 0.875em;
  line-height: 1;
  letter-spacing: -0.025em;
`
