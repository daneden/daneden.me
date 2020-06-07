/** @jsx jsx */
import { Atoms, PlainLink } from "@/designSystem"
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { FunctionComponent } from "react"
import Image from "./Image"

export interface BookData {
  author: string
  cover: string
  quote?: string
  title: string
  url: string
}

const Meta = styled("span")`
  color: var(--meta-color, ${Atoms.colors.meta});
  font-size: ${Atoms.font.size.small};
`

const BookContainer = styled.div`
  align-items: start;
  display: grid;
  grid-gap: ${Atoms.spacing.medium};
  grid-template-columns: ${Atoms.spacing.xxlarge} 1fr;
`

const Book: FunctionComponent<BookData> = ({
  author,
  cover,
  quote,
  title,
  url,
}) => {
  const isExternalLink = url.startsWith("http")
  const contents = (
    <BookContainer>
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
            <img alt="External link icon" src="/images/outbound.svg" />
          )}
        </p>
        <p>
          <Meta>{author}</Meta>
        </p>
        {quote && (
          <p
            style={{
              fontSize: Atoms.font.size.small,
              paddingTop: Atoms.spacing.xsmall,
            }}
          >
            <em>‘{quote}’</em>
          </p>
        )}
      </div>
    </BookContainer>
  )

  return <PlainLink href={url}>{contents}</PlainLink>
}

export default Book
