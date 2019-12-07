import styled from '@emotion/styled'
import React, { ReactElement } from 'react'
import { Atoms } from './designSystem/designSystem'

interface WrapperProps {
  /* TODO: Remove eslint-disable (issue #137) */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}

const StyledWrapper = styled('div')`
  box-sizing: initial;
  margin: 0 auto;
  max-width: ${Atoms.widths.container};
`

export default function Wrapper(
  props: WrapperProps
): ReactElement<typeof StyledWrapper> {
  return <StyledWrapper {...props} />
}
