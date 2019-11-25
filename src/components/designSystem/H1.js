import { css } from "@emotion/core"
import React from "react"
import Atoms from "./atoms"

const H1 = ({ children, ...props }) => {
  const style = css`
    font-family: ${Atoms.font.family.display};
    font-size: ${Atoms.font.size.h1};
    font-style: italic;
    font-weight: bold;
    hyphens: initial;
    line-height: 1;
    margin-bottom: ${Atoms.spacing.medium};
    padding-bottom: ${Atoms.spacing.large};
    padding-top: ${Atoms.spacing.xlarge};
  `

  return (
    <h1 css={style} {...props}>
      {children}
    </h1>
  )
}

export default H1
