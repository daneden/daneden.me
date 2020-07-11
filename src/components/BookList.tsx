import widont from "@/utils/widont"
import cxs from "cxs/component"
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
    title: widont(book.title),
  }
}).sort((a, b) => strippedTitle(a.title).localeCompare(strippedTitle(b.title)))

const Library = cxs("div")({
  alignContent: "start",
  placeItems: "start",
  display: "grid",
  gridGap: Atoms.spacing.medium,
  gridTemplateColumns: "1fr",
})

const BookList = (): ReactElement<typeof Library> => (
  <Library>
    {books.map(({ title, author, quote, cover, url }) => (
      <Book
        author={author}
        cover={cover}
        key={title}
        quote={quote}
        title={title}
        url={url}
      />
    ))}
  </Library>
)

export default BookList
