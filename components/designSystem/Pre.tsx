/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import SyntaxHighlight from "components/SyntaxHighlight"
import React, { ReactChildren, ReactElement, ReactNode } from "react"
import Code from "./Code"

type PreProps = React.HTMLAttributes<HTMLPreElement> & {
  children: ReactChildren
  as?: ReactNode
}

const StyledCode = styled(Code)`
  line-height: 1.5;
  display: block;
  white-space: pre;
  overflow: auto;

  & code {
    font-family: inherit;
  }
`

const Pre = (props: PreProps): ReactElement<typeof React.Fragment> => (
  <>
    <SyntaxHighlight />
    <StyledCode as="pre" {...props} />
  </>
)

export default Pre
