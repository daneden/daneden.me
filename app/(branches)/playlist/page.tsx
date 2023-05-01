import Media, { MediaType } from "@/app/components/Media"
import widont from "@/app/utils/widont"
import { Metadata } from "next"
import playlist from "./playlist.json"

export const metadata: Metadata = {
  title: "Playlist",
  description: "Daniel Eden’s favourite books and podcasts",
}

// This function is used to help sort titles excluding leading "the/a"
const strippedTitle = (str: string): string =>
  str.replace(/^(the|a) /i, "").toLowerCase()

export default function LibraryPage() {
  const { mediaItems } = playlist

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
          type={type as MediaType}
          url={url}
        />
      ))}
    </>
  )
}
