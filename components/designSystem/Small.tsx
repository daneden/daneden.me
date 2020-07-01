import styled from "@emotion/styled"
import { Atoms } from "."

interface Props {
  receded?: boolean
  display: "block" | "inline-block"
  as?: React.ElementType
}
export default styled.small<Props>`
  font-size: ${Atoms.font.size.small};
  letter-spacing: 0.025em;
  line-height: ${Atoms.baseline};
  display: ${({ display = "inline-block" }): string => display};
  color: ${({ receded = true }): string =>
    receded ? "var(--meta-color)" : "inherit"};
`
