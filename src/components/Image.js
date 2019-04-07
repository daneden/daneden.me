/* @flow */
import React from "react"
import Imgix from "react-imgix"
import styled from "@emotion/styled"
import mdToHTML from "utils/mdToHTML"
import { Align, Atoms } from "designSystem/designSystem"

const Figure = styled("figure")`
  display: flex;
  flex-direction: ${props =>
    props.captionPosition === "left" ? "row" : "column"};
  justify-content: center;
  align-items: ${props =>
    props.captionPosition === "left" ? "start" : "initial"};
  
  margin-bottom: ${props => (props.marginBottom ? Atoms.spacing.medium : 0)};

  img {
    display: block;
    max-width: 100%;
    width: 100%;
    flex: 0 0 auto;
    order: 2;
  }

  span {
    ${props =>
      props.captionPosition === "left"
        ? `
          writing-mode: vertical-lr;
          transform: rotate(180deg);
          order: 1;
        `
        : `
          order: 3;
        `}
    margin-top: ${Atoms.spacing.xxsmall};
  }
`

const Caption = styled("span")`
  font-size: ${Atoms.font.size.small};
  color: ${Atoms.colors.meta};
  letter-spacing: 0.025em;
`

type Props = {
  align?: "left" | "right",
  alt?: string,
  className?: string,
  caption?: string,
  captionPosition: "left" | "bottom",
  marginBottom: boolean,
  src: string,
}

function Image({
  align,
  alt,
  className,
  caption,
  captionPosition = "bottom",
  marginBottom = true,
  src,
}: Props) {
  let Wrapper
  let sizes

  switch (align) {
    case "left":
      Wrapper = Align.Left
      break
    case "right":
      Wrapper = Align.Right
      break
    default:
      Wrapper = React.Fragment
  }

  switch (align) {
    case "left":
    case "right":
      sizes = `
        (min-width: ${Atoms.breakpoints.medium}) calc(${
        Atoms.widths.container
      } * .5),
        (min-width: ${Atoms.breakpoints.narrow}) calc(${
        Atoms.widths.container
      } * .4),
        100vw`
      break
    default:
      sizes = `(min-width: ${Atoms.breakpoints.narrow}) ${
        Atoms.widths.container
      }, 100vw`
  }

  const url =
    process.env.NODE_ENV && process.env.NODE_ENV.toUpperCase() === "DEVELOPMENT"
      ? `${process.env.PUBLIC_URL || ""}/uploads/${src}`
      : `https://daneden.imgix.net/${src}`

  const img = (
    <Imgix
      src={url}
      htmlAttributes={{
        alt,
      }}
      sizes={sizes}
    />
  )

  return (
    <Wrapper>
      <Figure
        marginBottom={marginBottom}
        captionPosition={captionPosition}
        className={className}
      >
        {img}
        {caption && <Caption>{mdToHTML(caption)}</Caption>}
      </Figure>
    </Wrapper>
  )
}

// TODO: See if there’s a way to use Object destructuring default values instead of defaultProps
// facebook/flow #5752
Image.defaultProps = {
  captionPosition: "bottom",
  marginBottom: true,
}

export default Image
