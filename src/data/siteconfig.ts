import { Metadata } from "next"
import face from "../../public/images/face.jpeg"

export const config = {
  title: "Daniel Eden, Designer",
  description:
    "The personal site, blog, and portfolio of Daniel Eden, a designer writing and thinking about design systems.",
  siteUrl: "https://daneden.me",
}

const metadata: Metadata = {
  title: {
    template: `%s | ${config.title}`,
    absolute: config.title,
  },
  description: config.description,
  icons: [face.src],
}

export default metadata
