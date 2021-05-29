import PlainLink from "@/components/PlainLink"
import Image from "./Image"

interface MediaCover {
  src: string
  width: number
  height: number
}

export interface MediaData {
  author: string
  cover: MediaCover
  quote?: string
  title: string
  url: string
  type: "book" | "podcast" | "music"
}

const Media = ({ author, cover, quote, title, url }: MediaData) => {
  return (
    <>
      <PlainLink href={url}>
        {" "}
        <div className="media-container">
          <Image
            alt={`The media cover for “${title}” by ${author}`}
            height={cover.height}
            sizes={"4rem"}
            src={cover.src}
            width={cover.width}
          />
          <div>
            <h3 className="title zm">{title}</h3>
            <p className="small meta zm">{author}</p>
            {quote && (
              <p
                className="small serif meta zm"
                style={{
                  paddingTop: "var(--sp-xs)",
                }}
              >
                <em>‘{quote}’</em>
              </p>
            )}
          </div>
        </div>
      </PlainLink>
      <style jsx>{`
        .media-container {
          align-items: start;
          display: grid;
          grid-gap: var(--sp-xs);
          grid-template-columns: var(--sp-xxl) 1fr;
          border-top: 1px solid var(--meta-color);
          margin-bottom: var(--sp-m);
        }

        /* Override Figure's margin-bottom */
        .media-container :global(figure) {
          margin-bottom: 0;
        }

        .title {
          line-height: 1.4;
        }
      `}</style>
    </>
  )
}

export default Media
