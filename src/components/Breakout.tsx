import Script from "next/script"
import { ReactNode } from "react"
interface Props {
  children: ReactNode
}

export default function Breakout({ children }: Props) {
  return (
    <>
      <Script id="breakout-width-fix">{`
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        window.innerWidth - document.documentElement.clientWidth + "px"
      )
      `}</Script>
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
          padding: var(--sp-s);
        }
      `}</style>
    </>
  )
}
