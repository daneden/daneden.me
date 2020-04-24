import styled from '@emotion/styled'
import React, { ReactElement, ReactNode } from 'react'
import { Atoms } from './designSystem/designSystem'

interface WrapperProps {
  id?: string
  children: ReactNode[]
  className?: string
}

const StyledWrapper = styled('div')`
  display: grid;
  grid-template-columns:
    [start] minmax(5rem, 1fr) [left-pull] minmax(5rem, 1fr) [main-start] minmax(
      20rem,
      ${Atoms.widths.container}
    )
    [main-end] minmax(5rem, 1fr) [right-pull] minmax(5rem, 1fr) [end];
  grid-gap: ${Atoms.baseline}rem;

  > * {
    grid-column: main-start / main-end;
  }

  :focus {
    outline: none;
  }
`

export default function Wrapper({
  id = 'content',
  className,
  children,
}: WrapperProps): ReactElement<typeof StyledWrapper> {
  return (
    <StyledWrapper className={className} id={id} role="region" tabIndex={-1}>
      {children}
    </StyledWrapper>
  )
}
