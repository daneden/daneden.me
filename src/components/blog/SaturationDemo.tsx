function ColorStrip() {
  const stops = Array(36).fill(0).map((_, i) => `hsl(${i * 10}, 100%, 50%)`).join(",")

  console.log(stops)
  return <>
    <div role="presentation"></div>
    <style jsx>{`
        div {
          height: var(--sp-xxl);
            background-image: linear-gradient(to right, ${stops});
        }
    `}</style>
  </>
}

function LinearVersusSteepedGradient() {
  const linearStops = Array(8).fill(0).map((_, i) => `hsl(200, 10%, ${(i + 1) * 10}%)`)
  const steepedStops = linearStops.map((_, i) => `hsl(200, ${((30 / linearStops.length) * i) + 10}%, ${(i + 1) * 10}%)`)

  return <>
    <figure>
      <div role="presentation">
        <div className="gradient linear"></div>
        <div className="gradient steeped"></div>
      </div>
      <figcaption>
        In this example, the top gradient maintains a constant saturation, whereas the bottom gradient increases in saturation as the lightness decreases. The result is a much richer, darker-seeming dark stop.
      </figcaption>
    </figure>
    <style jsx>{`
      .gradient {
        height: var(--sp-xl);
      }

      .gradient.linear {
        background-image: linear-gradient(to left, ${linearStops.join(", ")});
      }

      .gradient.steeped {
        background-image: linear-gradient(to left, ${steepedStops.join(", ")});
      }
    `}</style>
  </>
}

function RelativeSaturationDemo() {
  return <>
    <figure>
      <ColorStrip />
      <div className="grayscale"><ColorStrip /></div>
      <figcaption>
        The two gradients above show that colours with equal saturation and lightness actually vary quite a lot in perceived brightness. Note that the bottom gradient is a desaturated version of the top gradient.
      </figcaption>
    </figure>
    <style jsx>{`.grayscale {
      filter: grayscale(100%);
    }`}</style>
  </>
}

export default function SaturationDemo() {
  return <>
    <RelativeSaturationDemo />
    <LinearVersusSteepedGradient />
  </>
}