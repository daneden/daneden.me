/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { ReactElement } from "react"
import { Atoms, Link } from "./designSystem"

const StyledNav = styled("nav")`
  background-color: ${Atoms.colors.highlight};
  color: ${Atoms.colors.text};
  height: 0;
  margin: 0 -${Atoms.spacing.medium};
  padding: ${Atoms.spacing.xsmall} ${Atoms.spacing.medium};
  position: absolute;
  top: -100%;

  a {
    --hoverColor: inherit;
  }

  :focus-within {
    height: auto;
    position: initial;
  }
`

const SkipLink = (): ReactElement<typeof StyledNav> => (
  <StyledNav>
    <Link href="#content">Skip to content</Link>
  </StyledNav>
)

export default SkipLink
