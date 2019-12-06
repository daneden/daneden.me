// eslint-disable-next-line @typescript-eslint/no-var-requires
const slugify = require('slug')

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = function slug(path) {
  // get the date and title from the file name
  const [, date, title] = path.match(/^([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)$/)

  // create a new slug concatenating everything
  return `/${slugify(date, '/')}/${title}/`
}
