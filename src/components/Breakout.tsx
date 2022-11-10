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
      <div className="breakout-container-hack">
        <div className="breakout-container">{children}</div>
      </div>
    </>
  )
}
