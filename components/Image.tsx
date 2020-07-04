import Markdown from "@/utils/Markdown"
import cxs from "cxs/component"
import React, { FunctionComponent } from "react"
import Imgix from "react-imgix"
import { Align, Atoms, Caption, Figure } from "./designSystem"
import { FigureProps } from "./designSystem/Figure"

const ImgxWrapper = cxs<
  "div",
  { invertInDarkMode: boolean; children: React.ReactNode }
>("div")(({ invertInDarkMode }) => ({
  "@media (prefers-color-scheme: dark)": {
    filter: invertInDarkMode ? "invert(100%) hue-rotate(180deg)" : "initial",
  },
}))

interface ImageProps extends Omit<FigureProps, "children"> {
  align?: "left" | "right"
  alt?: string
  caption?: string
  defaultSize?: string
  invertInDarkMode?: boolean
  src: string
}

const Image: FunctionComponent<ImageProps> = ({
  align,
  alt,
  className,
  caption,
  defaultSize = Atoms.widths.container,
  invertInDarkMode = false,
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
        ${defaultSize}`
      break
    default:
      sizes = `(min-width: ${Atoms.breakpoints.narrow}) ${Atoms.widths.container}, ${defaultSize}`
  }

  const url =
    process.env.NODE_ENV && process.env.NODE_ENV.toUpperCase() === "DEVELOPMENT"
      ? `${process.env.PUBLIC_URL || ""}/uploads/${src}`
      : `https://daneden.imgix.net/${src}`

  const img = responsive ? (
    <ImgxWrapper invertInDarkMode={invertInDarkMode}>
      <Imgix
        src={url}
        htmlAttributes={{
          alt,
          loading: "lazy",
        }}
        sizes={sizes}
      />
    </ImgxWrapper>
  ) : (
    <img alt={alt} src={url} />
  )

  return (
    <Wrapper>
      <Figure className={className} margin={margin} responsive={responsive}>
        {img}
        {caption && (
          <Caption>
            <Markdown>{caption}</Markdown>
          </Caption>
        )}
      </Figure>
    </Wrapper>
  )
}

export default Image
