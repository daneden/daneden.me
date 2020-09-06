import widont from "@/utils/widont"
import BOOKS from "../data/books.json"
import Book, { BookData } from "./Book"
import Atoms from "./designSystem/atoms"
import Breakout from "./Breakout"

// This function is used to help sort titles excluding leading "the/a"
const strippedTitle = (str: string): string =>
  str.replace(/^(the|a) /i, "").toLowerCase()

const books = BOOKS.map((book) => {
  return {
    ...book,
    // Replace the last space with a non-breaking space
    title: widont(book.title),
  }
}).sort((a, b) =>
  strippedTitle(a.title).localeCompare(strippedTitle(b.title))
) as BookData[]

const BookList = () => (
  <>
    <Breakout>
      <div className="library">
        {books.map(({ title, author, quote, cover, url, type }) => (
          <Book
            author={author}
            cover={cover}
            key={title}
            quote={quote}
            title={title}
            type={type}
            url={url}
          />
        ))}
      </div>
    </Breakout>
    <style jsx>{`
      .library {
        align-content: start;
        place-items: start;
        display: grid;
        grid-gap: ${Atoms.spacing.large};
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        justify-items: stretch;
      }
    `}</style>
    <style global jsx>{`
      :root {
        --wash-color: #ffecf1;
        --text-color: #1f1136;
        --meta-color: #866a88;
      }

      @media (prefers-color-scheme: dark) {
        :root {
          --wash-color: #1f1136;
          --text-color: #ffecf1;
        }
      }
    `}</style>
  </>
)

export default BookList
