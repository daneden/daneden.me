import Layout from "@/components/Layout"
import { GetStaticProps } from "next"
import Media, { MediaData } from "@/components/Media"
import widont from "@/utils/widont"
import React from "react"

interface AirtableRecord {
  fields: MediaData & {
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

/*

const AIRTABLE_URL = "https://api.airtable.com/v0/appvuN9NMJEcGKY7Z/entries"

// This function is used to help sort titles excluding leading "the/a"
const strippedTitle = (str: string): string =>
  str.replace(/^(the|a) /i, "").toLowerCase()

export default function LibraryPage({ entries }: { entries: MediaData[] }) {
  return (
    <Layout frontMatter={{ title: "Playlist" }}>
      {entries.map(({ title, author, quote, cover, url, type }) => (
        <Media
          author={author}
          cover={cover}
          key={title}
          quote={quote}
          title={title}
          type={type}
          url={url}
        />
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const mediaDataSource = (await fetch(AIRTABLE_URL, {
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
    )) as MediaData[]

  const entries = mediaDataSource
    .map((media) => {
      return {
        ...media,
        // Replace the last space with a non-breaking space
        title: widont(media.title),
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

*/
