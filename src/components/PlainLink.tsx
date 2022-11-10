import Link, { LinkProps } from "next/link"

type Props = React.PropsWithChildren<LinkProps> & {
  className?: string
  onClick?: () => void
}

const PlainLink = ({ children, className, href, onClick }: Props) => (
  <>
    <span className={`plainlink-wrapper ${className ?? ""}`}>
      <Link href={href} passHref={true}>
        <a href={String(href)} onClick={onClick}>
          {children}
        </a>
      </Link>
    </span>
  </>
)

export default PlainLink
