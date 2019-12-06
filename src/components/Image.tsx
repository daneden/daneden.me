import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'
import Imgix from 'react-imgix'
import mdToHTML from '../utils/mdToHTML'
import { Align, Atoms } from './designSystem/designSystem'

interface FigureProps {
  className?: string
  captionPosition?: 'bottom' | 'left'
  responsive?: boolean
  margin?: boolean
}

interface ImageProps extends FigureProps {
  align?: 'left' | 'right'
  alt?: string
  caption?: string
  invertInDarkMode?: boolean
  src: string
}

const Figure = styled('figure')<FigureProps>(
  props => `
  display: flex;
  flex-direction: ${props.captionPosition === 'left' ? 'row' : 'column'};
  justify-content: center;
  align-items: ${props.captionPosition === 'left' ? 'start' : 'initial'};
  writing-mode: horizontal-tb;
  margin-bottom: ${
    props.margin && props.captionPosition !== 'left' ? Atoms.spacing.medium : 0
  };

  img {
    display: block;
    width: ${props.responsive ? '100%' : 'auto'};
    flex: 1 1 auto;
    order: 2;
  }

  figcaption {
    ${
      props.captionPosition === 'left'
        ? `
          writing-mode: vertical-rl;
          text-orientation: mixed;
          align-self: stretch;
          flex: 0 1 auto;
          order: 1;
        `
        : `
          order: 3;
        `
    }
    margin-top: ${Atoms.spacing.xxsmall};
  }
`
)

const Caption = styled('figcaption')`
  font-size: ${Atoms.font.size.small};
  color: var(--meta-color, ${Atoms.colors.meta});
  letter-spacing: 0.025em;
`

const Image: FunctionComponent<ImageProps> = ({
  align,
  alt,
  className,
  caption,
  captionPosition,
  invertInDarkMode = false,
  responsive = true,
  margin = true,
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
        100vw`
      break
    default:
      sizes = `(min-width: ${Atoms.breakpoints.narrow}) ${Atoms.widths.container}, 100vw`
  }

  const url =
    process.env.NODE_ENV && process.env.NODE_ENV.toUpperCase() === 'DEVELOPMENT'
      ? `${process.env.PUBLIC_URL || ''}/uploads/${src}`
      : `https://daneden.imgix.net/${src}`

  const img = responsive ? (
    <Imgix
      src={url}
      htmlAttributes={{
        alt,
        loading: 'lazy',
      }}
      sizes={sizes}
      css={
        invertInDarkMode && {
          '@media (prefers-color-scheme: dark)': {
            filter: 'invert(100%) hue-rotate(180deg)',
          },
        }
      }
    />
  ) : (
    <img src={url} />
  )

  return (
    <Wrapper>
      <Figure
        captionPosition={captionPosition}
        className={className}
        margin={margin}
        responsive={responsive}
      >
        {img}
        {caption && <Caption>{mdToHTML(caption)}</Caption>}
      </Figure>
    </Wrapper>
  )
}

export default Image
