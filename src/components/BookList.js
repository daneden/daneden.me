/* @flow */
import type { BookData } from "./Book"
import React from "react"
import styled from "@emotion/styled"

import Atoms from "designSystem/atoms"
import Book from "./Book"

const strippedTitle = (str: string): string =>
  str.replace(/^(the|a) /i, "").toLowerCase()

const preventWidows = (book: BookData): BookData => {
  return {
    ...book,
    title: book.title.replace(/ ([^ ]*)$/, "\u00A0$1"),
  }
}

const books: Array<BookData> = [
  {
    author: "Anne Lamott",
    cover: "books/bird.jpg",
    title: "Bird By Bird",
    url: "http://amzn.to/2wi5jDH",
  },
  {
    author: "Christian Rudder",
    cover: "books/dataclysm.jpg",
    title: "Dataclysm",
    url: "http://amzn.to/2vPTGRf",
  },
  {
    author: "Bruno Munari",
    cover: "books/design-art.jpg",
    title: "Design as Art",
    url: "http://amzn.to/2vQ0Rcd",
  },
  {
    author: "Francesco Franchi",
    cover: "books/designing-news.jpg",
    title: "Designing News",
    url: "http://amzn.to/2vLnoZb",
  },
  {
    author: "Adam Alter",
    cover: "books/drunk-tank-pink.jpg",
    title: "Drunk Tank Pink",
    url: "http://amzn.to/2fSSb0M",
  },
  {
    author: "Nate Silver",
    cover: "books/signal-noise.jpg",
    title: "The Signal and The Noise",
    url: "http://amzn.to/2fSSHfe",
  },
  {
    author: "Simon Singh",
    cover: "books/the-code-book.jpg",
    title: "The Code Book",
    url: "http://amzn.to/2fTpu3A",
  },
  {
    author: "Bill Bryson",
    cover: "books/short-history.jpg",
    title: "A Short History of Nearly Everything",
    url: "http://amzn.to/2wYOvP4",
  },
  {
    author: "Dean Buonomano",
    cover: "books/time-machine.jpg",
    title: "Your Brain Is a Time Machine",
    url: "http://amzn.to/2fSXb5F",
  },
  {
    author: "Emil Ruder",
    cover: "books/typographie.jpg",
    title: "Typographie",
    url: "http://amzn.to/2znEDz6",
  },
  {
    author: "Daniel Kahneman",
    cover: "books/tfas.jpg",
    title: "Thinking, Fast and Slow",
    url: "http://amzn.to/2hTHQiU",
  },
  {
    author: "Kenya Hara",
    cover: "books/designing-design.jpg",
    title: "Designing Design",
    url: "http://amzn.to/2CZzSxR",
  },
  {
    author: "Graham Harman",
    cover: "books/ooo.jpg",
    title: "Object-Oriented Ontology",
    url: "https://amzn.to/2mpLHpZ",
  },
  {
    author: "Carlo Rovelli",
    cover: "books/order-of-time.jpg",
    title: "The Order of Time",
    url: "https://amzn.to/2zKooB2",
  },
  {
    author: "Brian Christian, Tom Griffiths",
    cover: "books/algorithms.jpg",
    title: "Algorithms To Live By",
    url: "https://amzn.to/2uILaDt",
  },
  {
    author: "BJ Novak",
    cover: "books/one-more-thing.jpg",
    title: "One More Thing",
    url: "https://amzn.to/2zQrZxm",
  },
]
  .map(preventWidows)
  .sort((a: BookData, b: BookData) =>
    strippedTitle(a.title).localeCompare(strippedTitle(b.title))
  )

const Library = styled("div")`
  align-items: baseline;
  display: grid;
  grid-gap: ${Atoms.spacing.medium};
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
`

export default function BookList() {
  return (
    <Library>
      {books.map(({ title, author, cover, url }) => (
        <Book
          author={author}
          cover={cover}
          title={title}
          url={url}
          key={title}
        />
      ))}
    </Library>
  )
}
