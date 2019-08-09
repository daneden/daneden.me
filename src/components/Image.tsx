import styled from "@emotion/styled"
import React, { FunctionComponent } from "react"
import Imgix from "react-imgix"
import { FigureProps, ImageProps } from "../interfaces/Image.interface"
import mdToHTML from "../utils/mdToHTML"
import { Align, Atoms } from "./designSystem/designSystem"

const Figure = styled("figure")<FigureProps>`
  display: flex;
  flex-direction: ${(props: FigureProps) =>
    props.captionPosition === "left" ? "row" : "column"};
  justify-content: center;
  align-items: ${(props: FigureProps) =>
    props.captionPosition === "left" ? "start" : "initial"};
  
  margin-bottom: ${(props: FigureProps) =>
    props.margin ? Atoms.spacing.medium : 0};

  img {
    display: block;
    width: ${(props: FigureProps) => (props.responsive ? "100%" : "auto")};
    flex: 0 0 auto;
    order: 2;
  }

  span {
    ${(props: FigureProps) =>
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

const Image: FunctionComponent<ImageProps> = ({
  align,
  alt,
  className,
  caption,
  captionPosition,
  responsive = true,
  margin = true,
  src,
}) => {
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
        (min-width: ${Atoms.breakpoints.medium}) calc(${Atoms.widths.container} * .5),
        (min-width: ${Atoms.breakpoints.narrow}) calc(${Atoms.widths.container} * .4),
        100vw`
      break
    default:
      sizes = `(min-width: ${Atoms.breakpoints.narrow}) ${Atoms.widths.container}, 100vw`
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
