/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { ReactElement } from "react"
import BOOKS from "../data/books.json"
import Book from "./Book"
import Atoms from "./designSystem/atoms"

const strippedTitle = (str: string): string =>
  str.replace(/^(the|a) /i, "").toLowerCase()

const books = BOOKS.map((book) => {
  return {
    ...book,
    title: book.title.replace(/ ([^ ]*)$/, "\u00A0$1"),
  }
}).sort((a, b) => strippedTitle(a.title).localeCompare(strippedTitle(b.title)))

const Library = styled("div")`
  align-content: start;
  place-items: start;
  display: grid;
  grid-gap: ${Atoms.spacing.medium};
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
`

const BookList = (): ReactElement<typeof Library> => (
  <Library>
    {books.map(({ title, author, cover, url }) => (
      <Book author={author} cover={cover} title={title} url={url} key={title} />
    ))}
  </Library>
)

export default BookList
