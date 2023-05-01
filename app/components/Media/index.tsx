import Link from "next/link"
import Image from "../Image"
import styles from "./styles.module.css"

export interface MediaItem {
  title: string
  author: string
  url: string
  quote?: string
  coverImage: Asset
  type: "book" | "podcast"
}

export interface Asset {
  url: string
  width: number
  height: number
  id: string
}

const Media = ({ author, coverImage: cover, quote, title, url }: MediaItem) => {
  return (
    <>
      <Link className="plainlink" href={url}>
        {" "}
        <div className={styles.root}>
          <Image
            alt={`The media cover for “${title}” by ${author}`}
            height={cover.height}
            sizes={"4rem"}
            src={cover.url}
            width={cover.width}
          />
          <div>
            <h3 className={styles.title}>{title}</h3>
            <p className="small meta zm">{author}</p>
            {quote && (
              <p
                className="small serif meta zm"
                style={{
                  paddingTop: "var(--sp-xs)",
                }}
              >
                <em>‘{quote}’</em>
              </p>
            )}
          </div>
        </div>
      </Link>
    </>
  )
}

export default Media
