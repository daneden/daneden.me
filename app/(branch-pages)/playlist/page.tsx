import Media, { MediaData } from "@/components/Media"
import widont from "@/utils/widont"

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

const AIRTABLE_URL = "https://api.airtable.com/v0/appvuN9NMJEcGKY7Z/entries"

// This function is used to help sort titles excluding leading "the/a"
const strippedTitle = (str: string): string =>
  str.replace(/^(the|a) /i, "").toLowerCase()

export default async function LibraryPage() {
  const mediaDataSource = await fetch(AIRTABLE_URL, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
    next: { revalidate: 60 },
    cache: "force-cache",
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
    )

  const entries = (mediaDataSource as MediaData[])
    .map((media: MediaData) => {
      return {
        ...media,
        // Replace the last space with a non-breaking space
        title: widont(media.title),
      }
    })
    .sort((a, b) =>
      strippedTitle(a.title).localeCompare(strippedTitle(b.title))
    )
  return (
    <>
      <h1>Playlist</h1>
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
    </>
  )
}
