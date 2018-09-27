import React from "react"
import Imgix from "react-imgix"
import styled from "react-emotion"

import Atoms from "designSystem/atoms"
import mdToHTML from "utils/mdToHTML"

const Figure = styled("figure")`
  margin-bottom: ${props =>
    props.margin === "bottom" ? Atoms.spacing.medium : 0};

  img {
    width: 100%;
  }
`

const Caption = styled("figcaption")`
  font-size: ${Atoms.font.size.small};
  color: ${Atoms.colors.meta};
`

class Image extends React.Component {
  static defaultProps = {
    margin: "bottom",
  }

  render() {
    const { className, caption, margin, src } = this.props
    const url =
      process.env.NODE_ENV &&
      process.env.NODE_ENV.toUpperCase() === "DEVELOPMENT"
        ? `${process.env.PUBLIC_URL || ""}/uploads/${src}`
        : `https://daneden.imgix.net/${src}`

    const img = (
      <Imgix
        aggressiveLoad={true}
        customParams={{ fm: "pjpg" }}
        defaultWidth={600}
        fit="max"
        src={url}
      />
    )

    return (
      <Figure margin={margin} className={className}>
        {img}
        {caption && <Caption>{mdToHTML(caption)}</Caption>}
      </Figure>
    )
  }
}

export default Image
