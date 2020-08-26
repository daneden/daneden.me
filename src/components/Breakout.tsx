import { ReactNode, useEffect } from "react"
import { Atoms } from "./designSystem"

interface Props {
  children: ReactNode
}

export default function Breakout({ children }: Props) {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      window.innerWidth - document.documentElement.clientWidth + "px"
    )
  })

  return (
    <>
      <div className="container-hack">
        <div className="container">{children}</div>
      </div>
      <style jsx>{`
        .container-hack {
          margin: 0 auto;
          width: 0;
        }

        .container {
          width: calc(100vw - var(--scrollbar-width, 0px));
          margin-left: -50vw;
          padding: ${Atoms.spacing.small};
        }
      `}</style>
    </>
  )
}
