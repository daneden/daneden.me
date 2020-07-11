import cxs from "cxs"
import { default as NextLink } from "next/link"
import { ReactElement, ReactNode } from "react"

export interface LinkProps {
  children: ReactNode
  underline?: boolean
  href: string
  className?: string
}

const Link = ({
  children,
  href,
  underline = true,
  className: passedClassName,
}: LinkProps) => {
  const className = [
    cxs({
      textDecoration: underline ? "underline" : "none",
    }),
    passedClassName,
  ].join(" ")

  const external =
    href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#")
  return external ? (
    <a className={className} href={href}>
      {children}
    </a>
  ) : (
    <NextLink href={href} passHref>
      <a className={className} href={href}>
        {children}
      </a>
    </NextLink>
  )
}

export default Link
