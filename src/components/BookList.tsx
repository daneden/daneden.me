import widont from "@/utils/widont"
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

const BookList = () => (
  <>
    <div className="library">
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
    </div>
    <style jsx>{`
      .library {
        align-content: start;
        place-items: start;
        display: grid;
        grid-gap: ${Atoms.spacing.medium};
        grid-template-columns: 1fr;
      }
    `}</style>
  </>
)

export default BookList
