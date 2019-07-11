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
  
  margin-bottom: ${props =>
    props.margin === "bottom" ? Atoms.spacing.medium : 0};

  img {
    display: block;
    width: ${props => (props.responsive ? "100%" : "auto")};
    flex: 0 0 auto;
    order: 2;
  }

  span {
    ${props =>
      props.captionPosition === "left"
        ? `
          writing-mode: vertical-rl;
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
  color: var(--meta-color, ${Atoms.colors.meta});
  letter-spacing: 0.025em;
`

function Image({
  align,
  alt,
  className,
  caption,
  captionPosition,
  responsive = true,
  margin,
  src,
}) {
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

  const img = responsive ? (
    <Imgix
      src={url}
      htmlAttributes={{
        alt,
        loading: "lazy",
      }}
      sizes={sizes}
    />
  ) : (
    <img src={url} loading="lazy" />
  )

  return (
    <Wrapper>
      <Figure
        margin={margin}
        captionPosition={captionPosition}
        className={className}
      >
        {img}
        {caption && <Caption>{mdToHTML(caption)}</Caption>}
      </Figure>
    </Wrapper>
  )
}

Image.defaultProps = {
  margin: "bottom",
}

export default Image
