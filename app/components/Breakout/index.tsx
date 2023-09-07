import Script from "next/script"
import { CSSProperties, ReactNode } from "react"
import styles from "./styles.module.css"
interface Props {
  children: ReactNode
  padding?: boolean
  style?: CSSProperties
}

export default function Breakout({ children, padding = true, style }: Props) {
  return (
    <>
      <Script id="breakout-width-fix">{`
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        window.innerWidth - document.documentElement.clientWidth + "px"
      )
      `}</Script>
      <div style={style} className={styles.breakoutContainerHack}>
        <div
          className={`${styles.breakoutContainer} ${
            padding ? styles.withPadding : ""
          }`}
        >
          {children}
        </div>
      </div>
    </>
  )
}
