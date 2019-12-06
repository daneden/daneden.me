import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'
import Atoms from './designSystem/atoms'
import PlainLink from './designSystem/PlainLink'
import Image from './Image'

export interface BookData {
  author: string
  cover: string
  title: string
  url: string
}

const BookLink = styled(PlainLink)`
  font-size: ${Atoms.font.size.small};
`

const Meta = styled('span')`
  color: var(--meta-color, ${Atoms.colors.meta});
`

const Book: FunctionComponent<BookData> = ({ author, cover, title, url }) => (
  <BookLink href={url}>
    <Image
      alt={`The book cover for “${title}” by ${author}`}
      margin={false}
      src={cover}
    />
    <p style={{ paddingTop: Atoms.spacing.xsmall }}>
      {title}
      <br />
      <Meta>{author}</Meta>
    </p>
  </BookLink>
)

export default Book
