import React from "react"

import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import Footer from '../components/Footer'

export default function Template({
  data,
  children,
}) {
  const { mdx, site } = data
  const { frontmatter } = mdx

  return (
    <Wrapper>
      <Header siteTitle={site.siteMetadata.title} />
      <main className="mxl">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        {children()}
      </main>
      <Footer author={site.siteMetadata.authorName} />
    </Wrapper>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        authorName
      }
    }
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
