import styled from "@emotion/styled"
import Atoms from "./atoms"

const Caption = styled("figcaption")`
  font-size: ${Atoms.font.size.small};
  color: var(--meta-color, ${Atoms.colors.meta});
  letter-spacing: 0.025em;
`

export default Caption
