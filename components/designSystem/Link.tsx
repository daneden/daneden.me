import cxs from "cxs/component"
import { default as NextLink } from "next/link"
import { ReactElement, ReactNode } from "react"

export interface LinkProps {
  children: ReactNode
  underline?: boolean
  href: string
  className?: string
  [x: string]: unknown
}

const StyledLink = cxs("a")(({ underline }: LinkProps) => ({
  textDecoration: underline ? "underline" : "none",
}))

const Link = ({
  children,
  href,
  underline = true,
  className,
}: LinkProps): ReactElement<typeof NextLink> => {
  const external =
    href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#")
  return external ? (
    <StyledLink href={href} className={className} underline={underline}>
      {children}
    </StyledLink>
  ) : (
    <NextLink href={href} passHref>
      <StyledLink href={href} className={className} underline={underline}>
        {children}
      </StyledLink>
    </NextLink>
  )
}

export default Link
