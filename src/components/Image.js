import React from "react"
import Imgix from "react-imgix"
import styled from "@emotion/styled"
import mdToHTML from "utils/mdToHTML"
import { Atoms } from "designSystem/designSystem"

const Figure = styled("figure")`
  margin-bottom: ${props =>
    props.margin === "bottom" ? Atoms.spacing.medium : 0};

  img {
    width: 100%;
  }
`

const Caption = styled("p")`
  font-size: ${Atoms.font.size.small};
  color: ${Atoms.colors.meta};
`

function Image({ alt, className, caption, margin, src }) {
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
    <Figure margin={margin} className={className}>
      {img}
      {caption && <Caption>{mdToHTML(caption)}</Caption>}
    </Figure>
  )
}

Image.defaultProps = {
  margin: "bottom",
}

export default Image
