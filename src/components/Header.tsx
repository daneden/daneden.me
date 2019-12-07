/* TODO: Remove eslint-disable (issue #136) */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled from '@emotion/styled'
import React, { ReactElement } from 'react'
import Atoms from './designSystem/atoms'
import PlainLink from './designSystem/PlainLink'
import PlainList from './designSystem/PlainList'
import LocationContext from './LocationContext'

const { useContext } = React

interface HeaderProps {
  siteTitle: string
}

const StyledHeader = styled('header')`
  border-bottom: 1px solid;
  display: grid;
  grid-template-columns: calc(${Atoms.widths.content} - ${Atoms.spacing.medium}) 1fr;
  grid-gap: ${Atoms.spacing.medium};
  flex-wrap: wrap;

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

const Header = ({
  siteTitle,
}: HeaderProps): ReactElement<typeof StyledHeader> => {
  const location = useContext(LocationContext)
  const blogPostRegex = /[0-9]{4}\/[0-9]{2}\/[0-9]{2}\//
  return (
    <StyledHeader>
      <PlainLink to="/">{siteTitle}</PlainLink>

      <nav>
        <PlainList>
          {links.map(({ to, label }) => (
            <li key={to}>
              <PlainLink to={to}>
                {label}
                {location!.includes(to) ||
                (location!.match(blogPostRegex) && to.includes('blog'))
                  ? ' ☚'
                  : ''}
              </PlainLink>
            </li>
          ))}
        </PlainList>
      </nav>
    </StyledHeader>
  )
}

export default Header
