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
      <div>{children}</div>
      <style jsx>{`
        div {
          -webkit-font-smoothing: antialiased;
          font-family: ${Atoms.font.family.display}, ${Atoms.font.family.sans};
          font-size: clamp(1.55rem, 3.4vw, 100vw);
          font-weight: 400;
          line-height: 1.25;
        }

        div :global(:last-child) {
          margin-bottom: 0;
        }
      `}</style>
    </>
  )
}
