import Layout from "@/components/Layout"
import Atoms from "@/designSystem/atoms"
import { GetStaticProps } from "next"
import Book, { BookData } from "@/components/Book"
import widont from "@/utils/widont"
import React from "react"
import Breakout from "@/components/Breakout"

interface AirtableRecord {
  fields: BookData & {
    cover: Array<{
      thumbnails: {
        large: {
          url: string
          width: number
          height: number
        }
      }
    }>
  }
}

const AIRTABLE_URL = "https://api.airtable.com/v0/appvuN9NMJEcGKY7Z/entries"

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
  const bookDataSource = (await fetch(AIRTABLE_URL, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
  })
    .then((d) => d.json())
    .then((d) => d.records)
    .then((d) =>
      d.map((airtableRecord: AirtableRecord) => {
        const { fields } = airtableRecord
        const cover = {
          src: fields.cover[0].thumbnails.large.url,
          width: fields.cover[0].thumbnails.large.width,
          height: fields.cover[0].thumbnails.large.height,
        }

        return {
          ...fields,
          cover,
        }
      })
    )) as BookData[]

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
    )

  return {
    props: {
      entries,
    },
    revalidate: 60,
  }
}
