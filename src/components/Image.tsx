import { css } from '@emotion/core'
import React, { FunctionComponent } from 'react'
import Imgix from 'react-imgix'
import mdToHTML from '../utils/mdToHTML'
import { Align, Atoms, Caption } from './designSystem/designSystem'
import { FigureProps } from './designSystem/Figure'

interface ImageProps extends FigureProps {
  align?: 'left' | 'right' | 'pullRight' | 'pullLeft'
  alt?: string
  caption?: string
  defaultSize?: string
  invertInDarkMode?: boolean
  src: string
}

const Image: FunctionComponent<ImageProps> = ({
  align,
  alt,
  caption,
  defaultSize = Atoms.widths.container,
  invertInDarkMode = false,
  src,
}) => {
  let Wrapper
  let sizes

  switch (align) {
    case 'left':
      Wrapper = Align.Left
      break
    case 'right':
      Wrapper = Align.Right
      break
    default:
      Wrapper = React.Fragment
  }

  switch (align) {
    case 'left':
    case 'right':
      sizes = `
        (min-width: ${Atoms.breakpoints.medium}) calc(${Atoms.widths.container} * .5),
        (min-width: ${Atoms.breakpoints.narrow}) calc(${Atoms.widths.container} * .4),
        ${defaultSize}`
      break
    default:
      sizes = `(min-width: ${Atoms.breakpoints.narrow}) ${Atoms.widths.container}, ${defaultSize}`
  }

  const url =
    process.env.NODE_ENV && process.env.NODE_ENV.toUpperCase() === 'DEVELOPMENT'
      ? `${process.env.PUBLIC_URL || ''}/uploads/${src}`
      : `https://daneden.imgix.net/${src}`

  const imageBaseStyle = css`
    display: block;
    width: 100%;
  `

  const captionStyle =
    align === 'pullLeft'
      ? css`
          grid-column: main-end / right-pull;
          align-self: end;
        `
      : align === 'pullRight'
      ? css`
          grid-column: left-pull / main-start;
          align-self: end;
        `
      : ''

  const imageStyle =
    align === 'pullLeft'
      ? css`
          ${imageBaseStyle};
          grid-column: left-pull / main-end;
        `
      : align === 'pullRight'
      ? css`
          ${imageBaseStyle};
          grid-column: main-start / right-pull;
        `
      : ''

  const img = (
    <Imgix
      src={url}
      htmlAttributes={{
        alt,
        loading: 'lazy',
      }}
      sizes={sizes}
      css={{
        ...imageBaseStyle,
        ...imageStyle,
        ...(invertInDarkMode && {
          '@media (prefers-color-scheme: dark)': {
            filter: 'invert(100%) hue-rotate(180deg)',
          },
        }),
      }}
    />
  )

  return (
    <Wrapper>
      {img}
      {caption && <Caption css={captionStyle}>{mdToHTML(caption)}</Caption>}
    </Wrapper>
  )
}

export default Image
