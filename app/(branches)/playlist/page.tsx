import Media, { MediaItem } from "@/components/Media"
import { client } from "@/utils/graphql-client"
import widont from "@/utils/widont"
import { gql } from "graphql-request"
import { Metadata } from "next"
import { cache } from "react"

export const runtime = "edge"

export const metadata: Metadata = {
  title: "Playlist",
  description: "Daniel Eden’s favourite books and podcasts",
}

// This function is used to help sort titles excluding leading "the/a"
const strippedTitle = (str: string): string =>
  str.replace(/^(the|a) /i, "").toLowerCase()

const getMediaItems = cache(async function getMediaItems() {
  return await client.request<{ mediaItems: MediaItem[] }>(gql`
    query MediaItems {
      mediaItems(first: 100) {
        author
        id
        quote
        title
        url
        coverImage {
          url
          width
          height
        }
      }
    }
  `)
})

export default async function LibraryPage() {
  const { mediaItems } = await getMediaItems()

  const entries = mediaItems
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
  return (
    <>
      <h1>Playlist</h1>
      {entries.map(({ title, author, quote, coverImage: cover, url, type }) => (
        <Media
          author={author}
          coverImage={cover}
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
