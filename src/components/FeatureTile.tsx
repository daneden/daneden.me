import Image from "@/components/Image"
import Link from "next/link"

interface Props {
  title: string
  description: string
  url: string
  image?: React.ReactElement<typeof Image>
}

export default function FeatureTile({ title, description, url, image }: Props) {
  return <>
    <Link href={url} legacyBehavior>
      <a className={`tile ${image ? "has-image" : ""}`}>
        {image ? <div className="tile__image">{image}</div> : null}
        <div className="tile__body">
          <h3>
            {title}&nbsp;<span className="arrow">&rarr;</span>
          </h3>
          <p>{description}</p>
        </div>
      </a>
    </Link>
    <style jsx>{`
      .tile {
        --transition: 0.15s cubic-bezier(0.6, 0.17, 0.31, 1);
        display: grid;
        gap: var(--sp-m);

        transition: var(--transition);
        background-color: var(--gray05);
        padding: var(--sp-m);
        border-radius: var(--sp-s);
        text-decoration: none;
        margin-bottom: var(--sp-m);
        align-items: center;
      }

      .tile :global(figure) {
        margin: 0;
        border-radius: var(--sp-xs);
        overflow: hidden;
      }

      @media (prefers-color-scheme: dark) {
        .tile {
          background-color: var(--gray35);
        }
      }

      .tile:hover,
      .tile:focus {
        background-color: var(--site-color);
        color: var(--gray00);
      }

      .tile.has-image {
        grid-template-columns: var(--sp-xxl) 1fr;
      }

      .tile__image {
        transform: scale(1.4) rotate(8deg) translateX(-20%);
        transition: var(--transition);
      }

      .tile:hover .tile__image {
        transform: rotate(-3deg);
      }

      .arrow {
        transition: var(--transition);
        transition-property: margin;
      }

      .tile:hover .arrow {
        margin-left: var(--sp-xs);
      }

      h3,
      p {
        margin: 0;
        padding: 0;
      }

      h3 {
        font-family: var(--font-sans);
        color: inherit;
        font-style: normal;
      }
    `}</style>
  </>;
}
