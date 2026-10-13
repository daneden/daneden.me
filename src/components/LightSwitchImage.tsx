import type { ImageProps } from "./Image"

interface Props extends Omit<ImageProps, "src"> {
  srcLight: string
  srcDark: string
}

/** Swaps image source with the system colour scheme, no JS required. */
export default function LightSwitchImage({
  srcDark,
  srcLight,
  alt,
  width,
  height,
  className,
  caption,
}: Props) {
  return (
    <figure className={className}>
      <picture>
        <source srcSet={srcDark} media="(prefers-color-scheme: dark)" />
        <img
          alt={alt}
          src={srcLight}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
        />
      </picture>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
