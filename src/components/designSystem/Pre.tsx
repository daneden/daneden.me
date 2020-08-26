import SyntaxHighlight from "@/components/SyntaxHighlight"
import React, { ReactChildren, ReactElement } from "react"
import { Atoms } from "."

type PreProps = React.HTMLAttributes<HTMLPreElement> & {
  children: ReactChildren
}

const Pre = (props: PreProps): ReactElement<typeof React.Fragment> => (
  <>
    <SyntaxHighlight />
    <pre {...props} />
    <style jsx>{`
      pre {
        background-color: var(--code-wash);
        box-shadow: inset 0 0 0 1px var(--code-wash),
          inset 0 0 0 1px var(--code-wash);
        border-radius: 0.35em;
        display: block;
        font-family: ${Atoms.font.family.mono};
        font-size: 0.875em;
        letter-spacing: -0.025em;
        line-height: 1;
        line-height: 1.5;
        overflow: auto;
        padding: ${Atoms.spacing.xsmall};
        margin: 0 -${Atoms.spacing.xsmall};
        vertical-align: baseline;
        white-space: pre;
        margin-bottom: ${Atoms.spacing.medium};
      }

      pre :global(code) {
        font-family: inherit;
      }
    `}</style>
  </>
)

export default Pre
