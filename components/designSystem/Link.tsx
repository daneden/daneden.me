/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core"
import { default as NextLink } from "next/link"
import { ReactElement, ReactNode } from "react"
import { Atoms } from "."

export interface LinkProps {
  children: ReactNode
  underline?: boolean
  href: string
  className?: string
  [x: string]: unknown
}

const styles = (underline: boolean): SerializedStyles => css`
  color: inherit;
  text-decoration: ${underline ? "underline" : "none"};

  &:hover,
  &:focus {
    color: ${Atoms.colors.site};
  }
`

const Link = ({
  children,
  href,
  underline = true,
  className,
}: LinkProps): ReactElement<typeof NextLink> => {
  const external =
    href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#")
  return external ? (
    <a href={href} className={className} css={styles(underline)}>
      {children}
    </a>
  ) : (
    <NextLink href={href} passHref>
      <a href={href} className={className} css={styles(underline)}>
        {children}
      </a>
    </NextLink>
  )
}

export default Link
