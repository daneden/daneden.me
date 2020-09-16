import useSwr from "swr"
import { Atoms, Link } from "./designSystem"

const fetcher = async (url: string, options?: RequestInit) => {
  return await fetch(url, options).then((d) => d.json())
}

export default function RecentlyPlayed() {
  const { data, error } = useSwr("/api/music", fetcher, {
    refreshInterval: 2000,
  })

  if (error) {
    console.error("Error fetching music from /api/music:", error)
    return null
  }

  if (!data) return null

  const { attributes } = data
  const { artwork, name, url } = attributes
  const imageUrl = artwork.url.replace("{w}", "172").replace("{h}", "172")

  return (
    <>
      <div className="container">
        <img alt="" className="cover" src={imageUrl} />
        <figure>
          <img
            alt={`Artwork for ${name}`}
            height={86}
            src={imageUrl}
            width={86}
          />
        </figure>
        <div className="info">
          <small className="badge">Recently Played</small>
          <span className="media-name">
            <Link href={url}>{name}</Link>
          </span>
          <small className="media-author">
            {attributes.artistName || attributes.curatorName}
          </small>
        </div>
      </div>
      <style jsx>{`
        .container {
          --player-bg: #${artwork.bgColor};
          --player-text-primary: #${artwork.textColor1};
          --player-text-secondary: #${artwork.textColor3};
          --player-text-tertiary: #${artwork.textColor3};
          --hover-color: currentcolor;
        }
      `}</style>
      <style jsx>{`
        div {
          display: grid;
        }

        .cover {
          bottom: 0;
          filter: blur(${Atoms.spacing.large});
          height: 100%;
          left: 0;
          object-fit: cover;
          opacity: 0.75;
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
        }

        .info {
          position: relative;
          z-index: 1;
        }

        .container {
          overflow: hidden;
          position: relative;
          align-items: center;
          grid-gap: ${Atoms.spacing.xsmall};
          grid-template-columns: ${Atoms.spacing.xlarge} 1fr;
          padding: ${Atoms.spacing.xsmall};
          border-radius: 0.5em;
          background-color: var(--player-bg);
          color: var(--player-text-primary);
          transition: 0.3s ease;
          transition-property: background-color, color;
          margin-bottom: ${Atoms.spacing.medium};
        }

        .media-author {
          color: var(--player-text-secondary);
        }

        .badge {
          color: var(--player-text-tertiary);
          text-transform: uppercase;
          font-size: 0.65rem;
          letter-spacing: 0.05em;
        }

        img {
          display: block;
          max-width: 100%;
          height: auto;
        }

        figure {
          display: inline-block;
          overflow: hidden;
          border-radius: 0.25em;
          position: relative;
          box-shadow: 0 ${Atoms.spacing.xsmall} ${Atoms.spacing.small}
            ${Atoms.spacing.xxsmall} rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  )
}
