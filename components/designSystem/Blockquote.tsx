import styled from "@emotion/styled"
import { Atoms } from "."

export default styled("blockquote")`
  border-left: 2px solid ${Atoms.colors.site};
  font-style: italic;
  padding-left: ${Atoms.spacing.medium};
  margin-bottom: ${Atoms.spacing.medium};

  & em,
  & strong {
    font-style: normal;
    font-weight: 400;
  }
`
