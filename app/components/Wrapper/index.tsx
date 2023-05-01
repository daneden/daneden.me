import { ReactNode } from "react"
import styles from "./styles.module.css"

interface WrapperProps {
  id?: string
  children: ReactNode
}

export default function Wrapper({ id = "content", children }: WrapperProps) {
  return (
    <>
      <div className={styles.wrapper} id={id} role="region" tabIndex={-1}>
        <main>{children}</main>
      </div>
    </>
  )
}
