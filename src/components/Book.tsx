import styled from "@emotion/styled"
import { FunctionComponent } from "react"
import { BookData } from "../interfaces/Book.interface"
import Atoms from "./designSystem/atoms"
import PlainLink from "./designSystem/PlainLink"
import Image from "./Image"

const BookLink = styled(PlainLink)`
  font-size: ${Atoms.font.size.small};
`

const Meta = styled("span")`
  color: var(--meta-color, ${Atoms.colors.meta});
`

const Book: FunctionComponent<BookData> = ({ author, cover, title, url }) => (
  <BookLink href={url}>
    <Image
      alt={`The book cover for “${title}” by ${author}`}
      margin={false}
      src={cover}
    />
    <p style={{ paddingTop: Atoms.spacing.xsmall }}>
      {title}
      <br />
      <Meta>{author}</Meta>
    </p>
  </BookLink>
)

export default Book
