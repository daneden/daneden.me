import styled from "@emotion/styled"
import Atoms from "./atoms"

export interface FigureProps {
  className?: string
  responsive?: boolean
  margin?: boolean
}

const Figure = styled("figure")<FigureProps>(
  ({ margin = true, responsive = true }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  writing-mode: horizontal-tb;
  margin-bottom: ${margin ? Atoms.spacing.medium : 0};

  img {
    display: block;
    width: ${responsive ? "100%" : "auto"};
    flex: 1 1 auto;
    order: 2;
  }

  figcaption {
    order: 3;
    margin-top: ${Atoms.spacing.xxsmall};
  }
`
)

export default Figure
