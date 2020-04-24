import { css } from 'emotion'
import React, { ReactElement } from 'react'
import Atoms from './designSystem/atoms'
import PlainLink from './designSystem/PlainLink'
import PlainList from './designSystem/PlainList'
import LocationContext from './LocationContext'
import Wrapper from './Wrapper'

const { useContext } = React

interface HeaderProps {
  siteTitle: string
}

const styles = css`
  border-bottom: 1px solid;

  margin-bottom: ${Atoms.spacing.small};
  padding-top: ${Atoms.spacing.xsmall};

  @media (max-width: ${Atoms.breakpoints.narrow}) {
    grid-template-columns: 1fr 1fr;
  }
`

const links = [
  {
    to: '/blog',
    label: 'Blog',
  },
  {
    to: '/portfolio',
    label: 'Portfolio',
  },
  {
    to: '/books',
    label: 'Library',
  },
]

const Header = ({ siteTitle }: HeaderProps): ReactElement<typeof Wrapper> => {
  const location = useContext(LocationContext)
  const blogPostRegex = /[0-9]{4}\/[0-9]{2}\/[0-9]{2}\//
  return (
    <Wrapper className={styles}>
      <PlainLink
        className={css`
          grid-column: start / main-start !important;
        `}
        to="/"
      >
        {siteTitle}
      </PlainLink>

      <nav
        className={css`
          grid-column: main-start / end;
        `}
      >
        <PlainList>
          {links.map(({ to, label }) => (
            <li key={to}>
              <PlainLink to={to}>
                {label}
                {location.includes(to) ||
                (location.match(blogPostRegex) && to.includes('blog'))
                  ? ' ☚'
                  : ''}
              </PlainLink>
            </li>
          ))}
        </PlainList>
      </nav>
    </Wrapper>
  )
}

export default Header
