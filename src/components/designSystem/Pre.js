import React from "react"
import styled from "@emotion/styled"

import { Atoms } from "./designSystem"
import Code from "./Code"

const StyledCode = styled(Code)`
  line-height: 1.5;
  display: block;
  margin-bottom: ${Atoms.spacing.medium};
  white-space: pre;
  max-width: 100%;
  overflow: auto;

  & code {
    font-family: inherit;
  }
`

const Pre = props => <StyledCode as="pre" {...props} />

export default Pre
