import { Atoms, PlainLink, Small } from "@/designSystem"
import Image from "./Image"
export interface BookData {
  author: string
  cover: string
  quote?: string
  title: string
  url: string
}

const Book = ({ author, cover, quote, title, url }: BookData) => {
  const isExternalLink = url.startsWith("http")

  return (
    <>
      <style jsx>{`
        .book-container {
          align-items: start;
          display: grid;
          grid-gap: ${Atoms.spacing.medium};
          grid-template-columns: ${Atoms.spacing.xxlarge} 1fr;
        }

        .external-link-icon {
          width: 0.5em;
        }
      `}</style>
      <PlainLink href={url}>
        {" "}
        <div className="book-container">
          <Image
            alt={`The book cover for “${title}” by ${author}`}
            defaultSize={Atoms.spacing.xxlarge}
            margin={false}
            src={cover}
          />
          <div>
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
            <p>
              <Small display="block">{author}</Small>
            </p>
            {quote && (
              <p
                style={{
                  paddingTop: Atoms.spacing.xsmall,
                }}
              >
                <Small display="block" receded={false}>
                  <em>‘{quote}’</em>
                </Small>
              </p>
            )}
          </div>
        </div>
      </PlainLink>
    </>
  )
}

export default Book
