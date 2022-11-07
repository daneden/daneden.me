import Image from "@/components/Image"
import Breakout from "../Breakout"

const imageNames = [
  "2012-01",
  "2012-05",
  "2012-09",
  "2013-01",
  "2013-05",
  "2013-09",
  "2013-12",
  "2014-01",
  "2014-02",
  "2014-06",
  "2014-11",
  "2015-09",
  "2016-03",
  "2016-09",
  "2017-08",
  "2018-05",
  "2019-01",
  "2019-07",
  "2020-08",
  "2020-11",
]

const dims = {
  width: 3176,
  height: 1663,
}
export default function RedesignGallery() {
  return (
    <>
      <Breakout>
        <div className="gallery">
          {imageNames.map((image) => {
            const date = new Date(image)
            const description = date.toLocaleDateString(undefined, {
              month: "short",
              year: "numeric",
            })

            return (
              <div className="image" key={image}>
                <Image
                  alt={`A screenshot of this website’s homepage in ${description}`}
                  caption={description}
                  height={dims.height}
                  src={`website-redesigns/${image}.png`}
                  width={dims.width}
                />
              </div>
            )
          })}
        </div>
      </Breakout>
      <style>{`
        .gallery {
          display: grid;
          gap: var(--sp-xs);
          grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
        }

        .gallery :global(figure) {
          margin-bottom: 0;
        }
      `}</style>
    </>
  )
}
