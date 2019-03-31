const slugify = require("slug")

function slug(path) {
  // get the date and title from the file name
  const [, date, title] = path.match(/^([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)$/)

  // create a new slug concatenating everything
  return `/${slugify(date, "/")}/${title}/`
}

module.exports = slug
