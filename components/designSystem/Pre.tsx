/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import SyntaxHiglight from "components/SyntaxHighlight"
import React, { ReactChildren, ReactElement, ReactNode } from "react"
import { Atoms } from "."
import Code from "./Code"

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

const Pre = (props: PreProps): ReactElement<typeof React.Fragment> => (
  <>
    <SyntaxHiglight />
    <StyledCode as="pre" {...props} />
  </>
)

export default Pre
