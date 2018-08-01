import React from 'react'
import Helmet from 'react-helmet'

import BookList from '../components/BookList'
import Layout from "../components/Layout"
import mdToHTML from '../utils/mdToHTML'

class LibraryPage extends React.Component {
  render() {
    const { data, location } = this.props
    return <Layout data={data} location={location}>
      <Helmet title="Library" />
      <div className="mxl">
        <h1>Library</h1>
        {mdToHTML(`
People often ask me what books they should read to learn more about design.
Here's a spattering of my favorite titles. Some are directly related to design,
others far removed, but they all have had an impact on my way of thinking.
        `)}

        <BookList />
      </div>
    </Layout>
  }
}

export default LibraryPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        authorName
      }
    }
  }`
