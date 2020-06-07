/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { ReactElement } from "react"
import BOOKS from "../data/books.json"
import Book from "./Book"
import Atoms from "./designSystem/atoms"

// This function is used to help sort titles excluding leading "the/a"
const strippedTitle = (str: string): string =>
  str.replace(/^(the|a) /i, "").toLowerCase()

const books = BOOKS.map((book) => {
  return {
    ...book,
    // Replace the last space with a non-breaking space
    title: book.title.replace(/ ([^ ]*)$/, "\u00A0$1"),
  }
}).sort((a, b) => strippedTitle(a.title).localeCompare(strippedTitle(b.title)))

const Library = styled("div")`
  align-content: start;
  place-items: start;
  display: grid;
  grid-gap: ${Atoms.spacing.medium};
  grid-template-columns: 1fr;
`

const BookList = (): ReactElement<typeof Library> => (
  <Library>
    {books.map(({ title, author, quote, cover, url }) => (
      <Book
        author={author}
        cover={cover}
        quote={quote}
        title={title}
        url={url}
        key={title}
      />
    ))}
  </Library>
)

export default BookList
