import type { CSSProperties, ReactNode } from "react"
import styles from "./styles.module.css"
interface Props {
  children: ReactNode
  padding?: boolean
  style?: CSSProperties
}

export default function Breakout({ children, padding = true, style }: Props) {
  return (
    <>
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
