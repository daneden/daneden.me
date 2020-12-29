import Atoms from "@/components/designSystem/atoms"
import PlainLink from "@/components/PlainLink"
import Image from "./Image"

interface BookCover {
  src: string
  width: number
  height: number
}
export interface BookData {
  author: string
  cover: BookCover
  quote?: string
  title: string
  url: string
  type: "book" | "podcast" | "music"
}

const Book = ({
  author,
  cover,
  quote,
  title,
  url,
  type = "book",
}: BookData) => {
  const isExternalLink = url.startsWith("http")

  return (
    <>
      <style jsx>{`
        .book-container {
          align-items: start;
          display: grid;
          grid-gap: ${Atoms.spacing.xsmall};
          grid-template-columns: ${Atoms.spacing.xlarge} 1fr;
          border-top: 1px solid;
        }

        /* Override Figure's margin-bottom */
        .book-container :global(figure) {
          margin-bottom: 0;
        }

        .external-link-icon {
          width: 0.5em;
        }

        .badge {
          font-size: 0.575rem;
          color: var(--wash-color);
          background-color: var(--meta-color);
          padding: 0.2em 0.35em;
          border-radius: 0.25em;
          display: inline-block;
          text-transform: uppercase;
          font-weight: 700;
          line-height: 1.1;
          font-family: ${Atoms.font.family.mono};
          letter-spacing: 0.0125em;
        }
      `}</style>
      <PlainLink href={url}>
        {" "}
        <div className="book-container">
          <Image
            alt={`The book cover for “${title}” by ${author}`}
            height={cover.height}
            sizes={Atoms.spacing.xlarge}
            src={cover.src}
            width={cover.width}
          />
          <div>
            <small className="badge">{type}</small>
            <p>
              {title}&nbsp;
              {isExternalLink && (
                <img
                  alt="External link icon"
                  className="external-link-icon"
                  src="/images/outbound.svg"
                />
              )}
            </p>
            <p className="small">{author}</p>
            {quote && (
              <p
                className="small"
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
    </>
  )
}

export default Book
