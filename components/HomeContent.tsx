import styled from "@emotion/styled"
import { ReactElement } from "react"
import Breakout from "./Breakout"
import { Atoms } from "./designSystem"

const Content = styled.div`
  -webkit-font-smoothing: antialiased;
  font-family: ${Atoms.font.family.sohne} ${Atoms.font.family.sans};
  font-size: clamp(1.75rem, 4.185vw, 100vw);
  font-weight: 700;
  line-height: 1.25;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }

  a {
    text-decoration-color: var(--hoverColor);
    text-decoration-thickness: 3px;
  }

  a[href^="https://twitter"]
  {
    --hoverColor: rgb(29, 161, 242);
  }

  a[href^="https://facebook"]
  {
    --hoverColor: rgb(24, 119, 242);
  }
`

export default function HomeContent({
  children,
}: {
  children: ReactElement<unknown>
}): ReactElement<HTMLDivElement> {
  return (
    <Content>
      <Breakout>{children}</Breakout>
    </Content>
  )
}
