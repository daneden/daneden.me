import styled from '@emotion/styled'
import React, { ReactElement } from 'react'
import PlainLink from './designSystem/PlainLink'

interface PlainLinkProps {
  post: {
    slug: string
    frontmatter: {
      title: string
      date: string
    }
  }
}

const Timestamp = styled('span')`
  font-style: italic;
`

const PostLink = ({ post }: PlainLinkProps): ReactElement<HTMLDivElement> => (
  <div>
    <PlainLink to={post.slug}>
      <div>{post.frontmatter.title}</div>
      <Timestamp>({post.frontmatter.date})</Timestamp>
    </PlainLink>
  </div>
)

export default PostLink
