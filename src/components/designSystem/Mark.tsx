import styled from '@emotion/styled'
import { Atoms } from './designSystem'

export default styled('mark')`
  background-color: ${Atoms.colors.mark};
  border-radius: ${Atoms.spacing.xxsmall};
  color: inherit;
  padding-left: ${Atoms.spacing.xxsmall};
  padding-right: ${Atoms.spacing.xxsmall};
`
