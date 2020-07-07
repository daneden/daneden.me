import cxs from "cxs"
import Atoms from "./atoms"

export interface FigureProps {
  className?: string
  responsive?: boolean
  margin?: boolean
  children: React.ReactNode
}

export default function Figure({
  margin = true,
  responsive = true,
  children,
  className,
}: FigureProps) {
  const styles = cxs({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    writingMode: "horizontal-tb",
    marginBottom: margin ? Atoms.spacing.medium : 0,

    " img": {
      display: "block",
      width: responsive ? "100%" : "auto",
      flex: "1 1 auto",
      order: 2,
    },

    " figcaption": {
      order: 3,
      marginTop: Atoms.spacing.xxsmall,
    },
  })

  return <figure className={[styles, className].join(" ")}>{children}</figure>
}
