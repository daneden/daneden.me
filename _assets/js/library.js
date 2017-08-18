const books = [
  {
    title: "Bird By Bird",
    author: "Anne Lamott",
    cover: "/uploads/books/bird.jpg",
    url: "http://amzn.to/2wi5jDH",
  },
  {
    title: "Dataclysm",
    author: "Christian Rudder",
    cover: "/uploads/books/dataclysm.jpg",
    url: "http://amzn.to/2vPTGRf",
  },
  {
    title: "Design as Art",
    author: "Bruno Munari",
    cover: "/uploads/books/design-art.jpg",
    url: "http://amzn.to/2vQ0Rcd",
  },
  {
    title: "Designing News",
    author: "Francesco Franchi",
    cover: "/uploads/books/designing-news.jpg",
    url: "http://amzn.to/2vLnoZb",
  },
  {
    title: "Drunk Tank Pink",
    author: "Adam Alter",
    cover: "/uploads/books/drunk-tank-pink.jpg",
    url: "http://amzn.to/2fSSb0M",
  },
  {
    title: "The Signal and The Noise",
    author: "Nate Silver",
    cover: "/uploads/books/signal-noise.jpg",
    url: "http://amzn.to/2fSSHfe",
  },
  {
    title: "Grid Systems in Graphic Design",
    author: "Josef Müller-Brockmann",
    cover: "/uploads/books/grid-systems.jpg",
    url: "http://amzn.to/2vLDH8k",
  },
  {
    title: "The Code Book",
    author: "Simon Singh",
    cover: "/uploads/books/the-code-book.jpg",
    url: "http://amzn.to/2fTpu3A",
  },
  {
    title: "A Short History of Nearly Everything",
    author: "Bill Bryson",
    cover: "/uploads/books/short-history.jpg",
    url: "http://amzn.to/2wYOvP4",
  },
  {
    title: "Your Brain Is a Time Machine",
    author: "Dean Buonomano",
    cover: "/uploads/books/time-machine.jpg",
    url: "http://amzn.to/2fSXb5F",
  },
]

const holder = document.querySelector('.js-library')
const loc = window.location.hostname + (
  window.location.port ?
    ':' + window.location.port :
    ''
  )

const strippedTitle = str => str.replace(/^(the|a) /i, '')

const list = books.sort((a, b) => strippedTitle(a.title) > strippedTitle(b.title))
  .map(book => `
    <div class="library__book">
      <a href=${book.url} class="plainLink">
        <img data-src=${'//' + loc + book.cover} class="imgix-fluid" />
        ${book.title} <br/>
        <em class="meta">${book.author}</em>
      </a>
    </div>
  `)
  .join('\n')

holder.innerHTML = list
