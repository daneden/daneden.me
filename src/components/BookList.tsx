import styled from "@emotion/styled"
import React from "react"
import Book, { BookData } from "./Book"
import Atoms from "./designSystem/atoms"

const strippedTitle = (str: string): string =>
  str.replace(/^(the|a) /i, "").toLowerCase()

const books: Array<BookData> = [
  {
    title: "Bird By Bird",
    author: "Anne Lamott",
    cover: "books/bird.jpg",
    url: "http://amzn.to/2wi5jDH",
  },
  {
    title: "Dataclysm",
    author: "Christian Rudder",
    cover: "books/dataclysm.jpg",
    url: "http://amzn.to/2vPTGRf",
  },
  {
    title: "Design as Art",
    author: "Bruno Munari",
    cover: "books/design-art.jpg",
    url: "http://amzn.to/2vQ0Rcd",
  },
  {
    title: "Designing News",
    author: "Francesco Franchi",
    cover: "books/designing-news.jpg",
    url: "http://amzn.to/2vLnoZb",
  },
  {
    title: "Drunk Tank Pink",
    author: "Adam Alter",
    cover: "books/drunk-tank-pink.jpg",
    url: "http://amzn.to/2fSSb0M",
  },
  {
    title: "The Signal and The Noise",
    author: "Nate Silver",
    cover: "books/signal-noise.jpg",
    url: "http://amzn.to/2fSSHfe",
  },
  {
    title: "The Code Book",
    author: "Simon Singh",
    cover: "books/the-code-book.jpg",
    url: "http://amzn.to/2fTpu3A",
  },
  {
    title: "A Short History of Nearly Everything",
    author: "Bill Bryson",
    cover: "books/short-history.jpg",
    url: "http://amzn.to/2wYOvP4",
  },
  {
    title: "Your Brain Is a Time Machine",
    author: "Dean Buonomano",
    cover: "books/time-machine.jpg",
    url: "http://amzn.to/2fSXb5F",
  },
  {
    title: "Typographie",
    author: "Emil Ruder",
    cover: "books/typographie.jpg",
    url: "http://amzn.to/2znEDz6",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    cover: "books/tfas.jpg",
    url: "http://amzn.to/2hTHQiU",
  },
  {
    title: "Designing Design",
    author: "Kenya Hara",
    cover: "books/designing-design.jpg",
    url: "http://amzn.to/2CZzSxR",
  },
  {
    title: "Object-Oriented Ontology",
    author: "Graham Harman",
    cover: "books/ooo.jpg",
    url: "https://amzn.to/2mpLHpZ",
  },
  {
    title: "The Order of Time",
    author: "Carlo Rovelli",
    cover: "books/order-of-time.jpg",
    url: "https://amzn.to/2zKooB2",
  },
  {
    title: "Algorithms To Live By",
    author: "Brian Christian, Tom Griffiths",
    cover: "books/algorithms.jpg",
    url: "https://amzn.to/2uILaDt",
  },
  {
    title: "One More Thing",
    author: "BJ Novak",
    cover: "books/one-more-thing.jpg",
    url: "https://amzn.to/2zQrZxm",
  },
  {
    title: "Debt: The First 5,000 Years",
    author: "David Graeber",
    cover: "books/debt.jpg",
    url: "https://amzn.to/2LM6bYN",
  },
  {
    title: "Word By Word",
    author: "Kory Stamper",
    cover: "books/word-by-word.jpg",
    url: "https://amzn.to/33k4zK8",
  },
]
  .map(book => {
    return {
      ...book,
      title: book.title.replace(/ ([^ ]*)$/, "\u00A0$1"),
    }
  })
  .sort((a, b) => strippedTitle(a.title).localeCompare(strippedTitle(b.title)))

const Library = styled("div")`
  align-content: start;
  place-items: start;
  display: grid;
  grid-gap: ${Atoms.spacing.medium};
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
`

const BookList = () => (
  <Library>
    {books.map(({ title, author, cover, url }) => (
      <Book author={author} cover={cover} title={title} url={url} key={title} />
    ))}
  </Library>
)

export default BookList
