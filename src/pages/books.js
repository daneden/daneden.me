import React from 'react'

import BookList from '../components/BookList'
import mdToHTML from '../utils/mdToHTML'

export default function LibraryPage() {
  return <div className="mxl">
    <h1>Library</h1>
    {mdToHTML(`
People often ask me what books they should read to learn more about design.
Here's a spattering of my favorite titles. Some are directly related to design,
others far removed, but they all have had an impact on my way of thinking.
    `)}

    <BookList />
  </div>
}

