function ColorStrip() {
  const stops = Array(36)
    .fill(0)
    .map((_, i) => `hsl(${i * 10}, 100%, 50%)`)
    .join(",")

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, ${stops})`,
          height: "var(--sp-xxl)",
        }}
        className="colorStrip"
        role="presentation"
      ></div>
    </>
  )
}

function LinearVersusSteepedGradient() {
  const linearStops = Array(8)
    .fill(0)
    .map((_, i) => `hsl(200, 10%, ${(i + 1) * 10}%)`)
  const steepedStops = linearStops.map(
    (_, i) =>
      `hsl(200, ${(30 / linearStops.length) * i + 10}%, ${(i + 1) * 10}%)`
  )

  const commonStyles = {
    height: "var(--sp-xl)",
  }

  return (
    <>
      <figure>
        <div role="presentation">
          <div
            style={{
              ...commonStyles,
              backgroundImage: `linear-gradient(to left, ${linearStops.join(
                ", "
              )})`,
            }}
          />
          <div
            style={{
              ...commonStyles,
              backgroundImage: `linear-gradient(
            to left,
            ${steepedStops.join(", ")}
          )`,
            }}
          ></div>
        </div>
        <figcaption>
          In this example, the top gradient maintains a constant saturation,
          whereas the bottom gradient increases in saturation as the lightness
          decreases. The result is a much richer, darker-seeming dark stop.
        </figcaption>
      </figure>
    </>
  )
}

function RelativeSaturationDemo() {
  return (
    <>
      <figure>
        <ColorStrip />
        <div
          style={{
            filter: "grayscale(100%)",
          }}
        >
          <ColorStrip />
        </div>
        <figcaption>
          The two gradients above show that colours with equal saturation and
          lightness actually vary quite a lot in perceived brightness. Note that
          the bottom gradient is a desaturated version of the top gradient.
        </figcaption>
      </figure>
    </>
  )
}

export default function SaturationDemo() {
  return (
    <>
      <RelativeSaturationDemo />
      <LinearVersusSteepedGradient />
    </>
  )
}
