import React from "react"
import { css } from "@emotion/core"

import Atoms from "./atoms"

const H1 = ({ weight = 500, width = 30, slant = 0, ...props }) => {
  const style = css`
    font-family: ${Atoms.font.family.display};
    font-size: ${Atoms.font.size.h1};
    font-weight: 400;
    font-variation-settings: "wght" ${weight}, "wdth" ${width}, "ital" ${slant};
    hyphens: initial;
    line-height: 1;
    margin-bottom: ${Atoms.spacing.medium};
    padding-bottom: ${Atoms.spacing.large};
    padding-top: ${Atoms.spacing.xlarge};
  `

  return (
    <h1 css={style} {...props}>
      {props.children}
    </h1>
  )
}

export default H1
