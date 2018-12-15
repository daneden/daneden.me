import remark from "remark"
import reactRenderer from "remark-react"

export default function mdToHTML(markdown) {
  return remark()
    .use(reactRenderer)
    .processSync(markdown, (err, file) => {
      if (err) console.error(err)
    }).contents
}
