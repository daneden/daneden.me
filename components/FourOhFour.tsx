/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { ReactElement } from "react"
import Breakout from "./Breakout"

const StyledH1 = styled.h1`
  height: 70vmin;
  margin: 0;
  padding: 0;
  background-image: url("/static/images/pnf.svg"), url("/static/images/404.svg"),
    url("/images/pnf.svg");
  background-repeat: repeat-x;
  background-size: auto 10vmin, auto 50vmin, auto 10vmin;
  background-position: center 0, center 10vmin, center 60vmin;
  span {
    visibility: hidden;
  }
`

export default function FourOhFour(): ReactElement<HTMLDivElement> {
  return (
    <Breakout>
      <StyledH1>
        <span>404 Page Not Found</span>
      </StyledH1>
    </Breakout>
  )
}
