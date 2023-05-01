import styles from "./styles.module.css"

const Subject = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <>
    <div className={`${className} ${styles.root}`}>{children}</div>
  </>
)

const Align = {
  Left({ children }: { children: React.ReactNode }) {
    return <Subject className={styles.left}>{children}</Subject>
  },
  Right({ children }: { children: React.ReactNode }) {
    return <Subject className={styles.right}>{children}</Subject>
  },
}

export default Align
