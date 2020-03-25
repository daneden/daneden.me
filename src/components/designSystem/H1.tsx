import { css } from '@emotion/core'
import React, { ReactElement, ReactNode } from 'react'
import Atoms from './atoms'

interface H1Props {
  children?: ReactNode
}

const H1 = ({ children }: H1Props): ReactElement<HTMLElement> => {
  const style = css`
    font-family: ${Atoms.font.family.display};
    font-size: ${Atoms.font.size.h1};
    font-style: italic;
    font-weight: bold;
    hyphens: initial;
    line-height: 1.1;
    margin-bottom: ${Atoms.spacing.medium};
    padding-bottom: ${Atoms.spacing.large};
    padding-top: ${Atoms.spacing.xlarge};
  `

  return <h1 css={style}>{children}</h1>
}

export default H1
