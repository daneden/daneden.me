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
    <Wrapper className="phl">
      <Header siteTitle={site.siteMetadata.title} />
      <main className="mxl">
        <header className="mxl">
          <h1>{frontmatter.title}</h1>
          <p className="hide">{frontmatter.date}</p>
        </header>
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
