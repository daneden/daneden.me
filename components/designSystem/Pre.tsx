import SyntaxHighlight from "@/components/SyntaxHighlight"
import cxs from "cxs/component"
import React, { ReactChildren, ReactElement, ReactNode } from "react"
import { codeStyle } from "./Code"

type PreProps = React.HTMLAttributes<HTMLPreElement> & {
  children: ReactChildren
}

const StyledCode = cxs("pre")({
  ...codeStyle,
  lineHeight: 1.5,
  display: "block",
  whiteSpace: "pre",
  overflow: "auto",

  " code": {
    fontFamily: "inherit",
  },
})

const Pre = (props: PreProps): ReactElement<typeof React.Fragment> => (
  <>
    <SyntaxHighlight />
    <StyledCode {...props} />
  </>
)

export default Pre
