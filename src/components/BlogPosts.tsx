/* TODO: Remove eslint-disable (issue #137) */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { css } from '@emotion/core'
import React, { ReactElement } from 'react'
import useBlogPostsQuery from '../hooks/useBlogPostsQuery'
import slug from '../utils/slugFromPath'
import { Atoms, PlainList } from './designSystem/designSystem'
import PostLink from './PostLink'

const liStyle = css`
  margin-bottom: ${Atoms.spacing.medium};
`

export default function BlogPosts(): ReactElement<typeof PlainList> {
  const {
    allMdx: { edges: posts },
  } = useBlogPostsQuery()

  return (
    <PlainList>
      {posts!
        .filter(post => !post.node.frontmatter.hidden)
        .map(post => {
          const path = slug(post.node.parent.name)
          return (
            <li css={liStyle} key={path}>
              <PostLink post={{ ...post.node, slug: path }} />
            </li>
          )
        })}
    </PlainList>
  )
}
