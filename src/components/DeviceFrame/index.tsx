import { ReactNode } from "react"
import styles from "./styles.module.css"

export default function DeviceFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <figure className={styles.device}>
        <span className={styles.deviceInner}>{children}</span>
      </figure>
    </>
  )
}
