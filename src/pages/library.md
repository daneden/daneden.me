export const frontmatter = {
  layout: "page",
  title: "Library",
}

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
  {
    title: "Unjustified Texts",
    author: "Robin Kinross",
    cover: "/uploads/books/ut.jpg",
    url: "http://amzn.to/2iDwgZO",
  },
  {
    title: "Typographie",
    author: "Emil Ruder",
    cover: "/uploads/books/typographie.jpg",
    url: "http://amzn.to/2znEDz6",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    cover: "/uploads/books/tfas.jpg",
    url: "http://amzn.to/2hTHQiU",
  },
  {
    title: "Designing Design",
    author: "Kenya Hara",
    cover: "/uploads/books/designing-design.jpg",
    url: "http://amzn.to/2CZzSxR",
  },
]

// removes "the" or "a" from the start of a string
// so we can sort book titles properly
const strippedTitle = str => str.replace(/^(the|a) /i, '').toLowerCase()

const list = books
  // Replace the last space with a non-breaking space
  .map(book => {
    return Object.assign(book, {
      title: book.title.replace(/ ([^ ]*)$/, '\u00A0$1'),
    })
  })
  // Sort the books alphabetically by their title, excluding 'The' or 'A'
  .sort((a, b) => strippedTitle(a.title).localeCompare(strippedTitle(b.title)))
  // Spit out the HTML
  .map(book => `
    <div class="library__book small">
      <a href=${book.url} class="sans plainlink">
        <img data-src=${'//' + loc + book.cover} class="imgix-fluid" />
        ${book.title} <br/>
        <em class="meta">${book.author}</em>
      </a>
    </div>
  `)
  .join('\n')

People often ask me what books they should read to learn more about design.
Here's a spattering of my favorite titles. Some are directly related to design,
others far removed, but they all have had an impact on my way of thinking.

<div class="js-library library">
  {
    // Do stuff here
  }
</div>
