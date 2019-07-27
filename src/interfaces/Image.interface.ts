export interface FigureProps {
  className?: string
  captionPosition?: "bottom" | "left"
  responsive?: boolean
  margin: boolean
}

export interface ImageProps extends FigureProps {
  align?: "left" | "right"
  alt?: string
  caption?: string
  src: string
}
