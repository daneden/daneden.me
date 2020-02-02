import styled from '@emotion/styled'
import React, { ReactElement } from 'react'
import { Atoms, Link } from './designSystem/designSystem'

const StyledNav = styled('nav')`
  background-color: var(--text-color);
  color: var(--wash-color);
  margin: 0 -${Atoms.spacing.medium};
  padding: ${Atoms.spacing.xsmall} ${Atoms.spacing.medium};
  position: absolute;
  top: -100%;
  height: 0;

  :focus-within {
    position: initial;
    height: auto;
  }
`

const SkipLink = (): ReactElement<typeof StyledNav> => (
  <StyledNav>
    <Link href="#content">Skip to content</Link>
  </StyledNav>
)

export default SkipLink
