import { Metadata } from "next"

const metadata: Metadata = {
  metadataBase: new URL("https://daneden.me"),
  title: {
    template: `%s | Daniel Eden, Designer`,
    absolute: "Daniel Eden, Designer",
  },
  description:
    "The personal site, blog, and portfolio of Daniel Eden, a designer writing and thinking about design systems.",
  openGraph: {
    title: "Daniel Eden, Designer",
    description:
      "The personal site, blog, and portfolio of Daniel Eden, a designer writing and thinking about design systems.",
    url: "https://daneden.me",
    siteName: "Daniel Eden, Designer",
    images: [
      {
        url: '/og/default',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@_dte",
    creator: "@_dte",
  },
}

export default metadata
