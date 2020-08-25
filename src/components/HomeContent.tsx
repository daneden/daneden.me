import { ReactElement } from "react"
import Breakout from "./Breakout"
import { Atoms } from "./designSystem"

export default function HomeContent({
  children,
}: {
  children: ReactElement<unknown>
}) {
  return (
    <>
      <div>
        <Breakout>{children}</Breakout>
      </div>
      <style jsx>{`
        div {
          -webkit-font-smoothing: antialiased;
          font-family: ${Atoms.font.family.sohne}, ${Atoms.font.family.sans};
          font-size: clamp(1.55rem, 4vw, 100vw);
          font-weight: 700;
          line-height: 1.25;
        }

        div :last-child {
          margin-bottom: 0;
        }
      `}</style>
    </>
  )
}
