/** @jsx jsx */
import styled from "@emotion/styled"
import Atoms from "./atoms"

export default styled.h1`
  font-family: ${Atoms.font.family.display};
  font-size: ${Atoms.font.size.h1};
  font-style: italic;
  font-weight: bold;
  hyphens: initial;
  line-height: 1.1;
  margin-bottom: ${Atoms.spacing.medium};
  padding-bottom: ${Atoms.spacing.large};
  padding-top: ${Atoms.spacing.xlarge};
`
