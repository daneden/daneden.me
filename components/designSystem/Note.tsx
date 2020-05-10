import styled from '@emotion/styled'
import { Atoms } from './designSystem'

export default styled('aside')`
  background-color: ${Atoms.colors.mark};
  border-left: 2px solid ${Atoms.colors.highlight};
  color: inherit;
  margin-bottom: ${Atoms.spacing.medium};
  padding: ${Atoms.spacing.small};
`
