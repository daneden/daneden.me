import Image from "@/app/components/Image"
import Link from "next/link"
import styles from "./styles.module.css"

interface Props {
  title: string
  description: string
  url: string
  image?: React.ReactElement<typeof Image>
}

export default function FeatureTile({ title, description, url, image }: Props) {
  return (
    <>
      <Link href={url}>
        <a className={`${styles.tile} ${image ? styles.hasImage : ""}`}>
          {image ? <div className={styles.tile__image}>{image}</div> : null}
          <div className={styles.tile__body}>
            <h3 className={styles.tile__header}>
              {title}&nbsp;<span className={styles.arrow}>&rarr;</span>
            </h3>
            <p className={styles.tile__p}>{description}</p>
          </div>
        </a>
      </Link>
    </>
  )
}
