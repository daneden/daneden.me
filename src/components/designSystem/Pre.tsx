import styled from "@emotion/styled"
import React, { ReactChildren, ReactNode } from "react"
import Code from "./Code"
import { Atoms } from "./designSystem"

type PreProps = React.HTMLAttributes<HTMLPreElement> & {
  children: ReactChildren
  as?: ReactNode
}

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

const Pre = (props: PreProps) => <StyledCode as="pre" {...props} />

export default Pre
