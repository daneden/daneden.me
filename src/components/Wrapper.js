import styled from '@emotion/styled'
import React from 'react'
import { Atoms } from './designSystem/designSystem'

const StyledWrapper = styled('div')`
  box-sizing: initial;
  margin: 0 auto;
  max-width: ${Atoms.widths.container};
`

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Wrapper(props) {
  return <StyledWrapper {...props} />
}
