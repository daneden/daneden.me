import styled from '@emotion/styled'
import React, { ReactElement, ReactNode } from 'react'
import { Atoms } from './designSystem/designSystem'

interface WrapperProps {
  children: ReactNode[]
}

const StyledWrapper = styled('div')`
  box-sizing: initial;
  margin: 0 auto;
  max-width: ${Atoms.widths.container};
`

export default function Wrapper({
  children,
}: WrapperProps): ReactElement<typeof StyledWrapper> {
  return <StyledWrapper>{children}</StyledWrapper>
}
