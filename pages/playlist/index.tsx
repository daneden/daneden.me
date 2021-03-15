import Layout from "@/components/Layout"
import Atoms from "@/designSystem/atoms"
import { GetStaticProps } from "next"
import bookDataSource from "@/data/books.json"
import Book, { BookData } from "@/components/Book"
import widont from "@/utils/widont"
import React from "react"
import Breakout from "@/components/Breakout"

// This function is used to help sort titles excluding leading "the/a"
const strippedTitle = (str: string): string =>
  str.replace(/^(the|a) /i, "").toLowerCase()

export default function LibraryPage({ entries }: { entries: BookData[] }) {
  return (
    <Layout frontMatter={{ title: "Playlist" }}>
      <Breakout>
        <div className="library">
          {entries.map(({ title, author, quote, cover, url, type }) => (
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
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const entries = bookDataSource
    .map((book) => {
      return {
        ...book,
        // Replace the last space with a non-breaking space
        title: widont(book.title),
      }
    })
    .sort((a, b) =>
      strippedTitle(a.title).localeCompare(strippedTitle(b.title))
    ) as BookData[]

  return {
    props: {
      entries,
    },
  }
}
