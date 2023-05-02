import Script from "next/script"
import { ReactNode } from "react"
import styles from "./styles.module.css"
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
      <div className={styles.breakoutContainerHack}>
        <div className={styles.breakoutContainer}>{children}</div>
      </div>
    </>
  )
}