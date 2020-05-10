import styled from '@emotion/styled'
import { Atoms } from './designSystem'

export default styled('hr')`
  border: 2px solid var(--meta-color, ${Atoms.colors.meta});
  content: '';
  display: block;
  height: 1px;
  margin: ${Atoms.spacing.large} 0;
`
