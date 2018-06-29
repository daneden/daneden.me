import React from 'react'

import Book from './Book'

const strippedTitle = str => str.replace(/^(the|a) /i, '').toLowerCase()

const books = [
  {
    title: "Bird By Bird",
    author: "Anne Lamott",
    cover: "books/bird.jpg",
    url: "http://amzn.to/2wi5jDH",
  },
  {
    title: "Dataclysm",
    author: "Christian Rudder",
    cover: "books/dataclysm.webp",
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
    title: "Grid Systems in Graphic Design",
    author: "Josef Müller-Brockmann",
    cover: "books/grid-systems.jpg",
    url: "http://amzn.to/2vLDH8k",
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
]

const list = books
  .map(book => {
    return {
      ...book,
      title: book.title.replace(/ ([^ ]*)$/, '\u00A0$1'),
    }
  })
  .sort((a, b) => strippedTitle(a.title).localeCompare(strippedTitle(b.title)))

export default function BookList() {
  return <div className="library">
    {list.map(({title, author, cover, url}) => (
      <Book
        author={author}
        cover={cover}
        title={title}
        url={url}
        key={title}
      />
      ))}
  </div>
}
