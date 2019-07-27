import remark from "remark"
import reactRenderer from "remark-react"
import { Link } from "../components/designSystem/designSystem"

export default function mdToHTML(markdown) {
  return remark()
    .use(reactRenderer, {
      remarkReactComponents: {
        a: Link,
      },
    })
    .processSync(markdown, (err, file) => {
      if (err) console.error(err)
    }).contents
}
