import cxs from "cxs/component"
import { ReactElement } from "react"
import Breakout from "./Breakout"
import { Atoms } from "./designSystem"

const Content = cxs("div")({
  WebkitFontSmoothing: "antialiased",
  fontFamily: `${Atoms.font.family.sohne}, ${Atoms.font.family.sans}`,
  fontSize: "clamp(1.75rem, 4vw, 100vw)",
  fontWeight: 700,
  lineHeight: 1.25,
  ":last-child": {
    marginBottom: 0,
  },
})

export default function HomeContent({
  children,
}: {
  children: ReactElement<unknown>
}): ReactElement<HTMLDivElement> {
  return (
    <>
      <Content>
        <Breakout>{children}</Breakout>
      </Content>
    </>
  )
}
