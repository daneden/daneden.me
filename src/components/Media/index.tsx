import Link from "next/link"
import Image from "../Image"
import styles from "./styles.module.css"

interface MediaCover {
  src: string
  width: number
  height: number
}

export interface MediaData {
  author: string
  cover: MediaCover
  quote?: string
  title: string
  url: string
  type: "book" | "podcast" | "music"
}

const Media = ({ author, cover, quote, title, url }: MediaData) => {
  return (
    <>
      <Link className="plainlink" href={url}>
        {" "}
        <div className={styles.root}>
          <Image
            alt={`The media cover for “${title}” by ${author}`}
            height={cover.height}
            sizes={"4rem"}
            src={cover.src}
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
