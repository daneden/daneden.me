import Atoms from "@/components/designSystem/atoms"
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

const Media = ({
  author,
  cover,
  quote,
  title,
  url,
  type = "book",
}: MediaData) => {
  return (
    <>
      <PlainLink href={url}>
        {" "}
        <div className="media-container">
          <Image
            alt={`The media cover for “${title}” by ${author}`}
            height={cover.height}
            sizes={Atoms.spacing.xlarge}
            src={cover.src}
            width={cover.width}
          />
          <div>
            <small className="badge">{type}</small>
            <p className="title zm">{title}</p>
            <p className="small zm">{author}</p>
            {quote && (
              <p
                className="small zm"
                style={{
                  paddingTop: Atoms.spacing.xxsmall,
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
          grid-gap: ${Atoms.spacing.xsmall};
          grid-template-columns: ${Atoms.spacing.xlarge} 1fr;
          border-top: 1px solid;
        }

        /* Override Figure's margin-bottom */
        .media-container :global(figure) {
          margin-bottom: 0;
        }

        .badge {
          font-size: 0.575rem;
          color: var(--wash-color);
          background-color: var(--meta-color);
          padding: 0.2em 0.35em;
          border-radius: 0.25em;
          display: inline-block;
          text-transform: capitalize;
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: 0.015em;
        }

        .title {
          line-height: 1.4;
        }
      `}</style>
    </>
  )
}

export default Media
