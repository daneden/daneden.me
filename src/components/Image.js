import React from "react"
import Imgix from "react-imgix"
import styled from "@emotion/styled"
import mdToHTML from "utils/mdToHTML"
import { Atoms } from "designSystem/designSystem"

const Figure = styled("figure")`
  display: flex;
  flex-direction: ${props =>
    props.captionPosition === "left" ? "row" : "column"};
  justify-content: center;
  align-items: ${props =>
    props.captionPosition === "left" ? "start" : "initial"};
  
  margin-bottom: ${props =>
    props.margin === "bottom" ? Atoms.spacing.medium : 0};

  img {
    display: block;
    max-width: 100%;
    width: 100%;
    flex-basis: 100%;
    flex-grow: 1;
    flex-shrink: 1;
    height: auto;
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

function Image({ alt, className, caption, captionPosition, margin, src }) {
  const url =
    process.env.NODE_ENV && process.env.NODE_ENV.toUpperCase() === "DEVELOPMENT"
      ? `${process.env.PUBLIC_URL || ""}/uploads/${src}`
      : `https://daneden.imgix.net/${src}`

  const img = (
    <Imgix
      aggressiveLoad={true}
      defaultWidth={600}
      fit="max"
      imgProps={{ alt }}
      imgixParams={{ fm: "pjpg" }}
      src={url}
      htmlAttributes={{
        alt,
      }}
    />
  )

  return (
    <Figure
      margin={margin}
      captionPosition={captionPosition}
      className={className}
    >
      {img}
      {caption && <Caption>{mdToHTML(caption)}</Caption>}
    </Figure>
  )
}

Image.defaultProps = {
  margin: "bottom",
}

export default Image
