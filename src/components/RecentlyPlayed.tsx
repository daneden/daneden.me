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

        .container {
          align-items: center;
          grid-gap: ${Atoms.spacing.xsmall};
          grid-template-columns: ${Atoms.spacing.xlarge} 1fr;
          padding: ${Atoms.spacing.xsmall};
          border-radius: 0.5em;
          background-color: var(--player-text-tertiary);
          color: var(--player-bg);
          transition: 0.3s ease;
          transition-property: background-color, color;
          background-image: linear-gradient(
            to left,
            transparent,
            var(--player-text-primary)
          );
          margin-bottom: ${Atoms.spacing.medium};
        }

        .media-author {
          opacity: 0.75;
        }

        .badge {
          opacity: 0.75;
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
          --inset-color: ${Atoms.colors.siteLight};
          display: inline-block;
          overflow: hidden;
          border-radius: 0.25em;
          position: relative;
          box-shadow: 0 ${Atoms.spacing.xsmall} ${Atoms.spacing.small}
            ${Atoms.spacing.xxsmall} rgba(0, 0, 0, 0.1);
        }

        figure::after {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          box-shadow: inset 0 0 0 1px ${Atoms.colors.siteDark};
          border-radius: 0.25em;
          content: "";
          opacity: 0.15;
        }
      `}</style>
    </>
  )
}
