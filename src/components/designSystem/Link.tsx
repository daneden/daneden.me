import { css, SerializedStyles } from '@emotion/core'
import { Link as GatsbyLink } from 'gatsby'
import React, { ReactElement, ReactNode } from 'react'
import { Atoms } from './designSystem'

interface InternalLinkProps {
  to: string
}

interface ExternalLinkProps {
  href: string
}

interface CommonLinkProps {
  children: ReactNode
  underline?: boolean
  [x: string]: unknown
}

export type LinkProps = CommonLinkProps &
  (ExternalLinkProps | InternalLinkProps)

const styles = (underline: boolean): SerializedStyles => css`
  color: inherit;
  text-decoration: ${underline ? 'underline' : 'none'};

  &:hover,
  &:focus {
    color: ${Atoms.colors.site};
  }
`

const Link = ({
  children,
  href,
  to,
  underline = true,
  ...other
}: LinkProps): ReactElement<typeof GatsbyLink | HTMLAnchorElement> => {
  if (to !== undefined) {
    return (
      <GatsbyLink
        className={other.className}
        css={styles(underline)}
        to={to}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a
      className={other.className}
      css={styles(underline)}
      href={href}
      {...other}
    >
      {children}
    </a>
  )
}

export default Link
