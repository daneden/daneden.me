import React from "react"
import Imgix from "react-imgix"
import styled from "@emotion/styled"
import mdToHTML from "utils/mdToHTML"
import { Atoms, DesignSystemProvider } from "designSystem/designSystem"
import Sans from "designSystem/Sans"

const Figure = styled("figure")`
  margin-bottom: ${props =>
    props.margin === "bottom" ? Atoms.spacing.medium : 0};

  img {
    width: 100%;
  }
`

const Caption = styled(Sans)`
  font-size: ${Atoms.font.size.small};
  color: ${Atoms.colors.meta};
`

class Image extends React.Component {
  static defaultProps = {
    margin: "bottom",
  }

  render() {
    const { alt, className, caption, margin, src } = this.props
    const url =
      process.env.NODE_ENV &&
      process.env.NODE_ENV.toUpperCase() === "DEVELOPMENT"
        ? `${process.env.PUBLIC_URL || ""}/uploads/${src}`
        : `https://daneden.imgix.net/${src}`

    const img = (
      <Imgix
        aggressiveLoad={true}
        imgixParams={{ fm: "pjpg", fit: "max" }}
        defaultWidth={600}
        src={url}
        htmlAttributes={{
          alt,
        }}
      />
    )

    return (
      <Figure margin={margin} className={className}>
        {img}
        {caption && (
          <DesignSystemProvider>
            <Caption>{mdToHTML(caption)}</Caption>
          </DesignSystemProvider>
        )}
      </Figure>
    )
  }
}

export default Image
