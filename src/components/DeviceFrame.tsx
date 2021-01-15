import { ReactNode } from "react"

export default function DeviceFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <figure className="device">
        <div className="device-inner">{children}</div>
      </figure>
      <style jsx>{`
        .device {
          display: block;
          box-sizing: initial;
          --inset-width: 1.5ch;
          --width: max(16rem, 20vmax);
          --aspect-ratio: 19.5/9;
          --radius-amount: 7.5%;
          --radius: calc(var(--radius-amount) * var(--aspect-ratio)) /
            var(--radius-amount);
          position: relative;
          width: var(--width);
          height: calc(var(--width) * var(--aspect-ratio));
          border-radius: var(--radius);
          padding: var(--inset-width);
          background-color: var(--wash-color);
          margin: 0 auto;
          box-shadow:
          /* Inner lowlight */ inset 0 0
              calc(var(--inset-width) * 0.35) calc(var(--inset-width) * 0.1)
              var(--wash-color),
            /* Inner highlight */ inset 0 0 var(--inset-width)
              calc(var(--inset-width) * 0.25) rgba(128, 128, 128, 0.2),
            /* Drop shadow */ 0 1.5rem 3rem rgba(0, 0, 0, 0.1);
          will-change: margin, transform;
        }

        .device :global(img) {
          width: auto;
          display: block;
        }

        .device::after {
          content: "";
          height: calc(var(--inset-width) * 1.35);
          position: absolute;
          width: 45%;
          left: 50%;
          transform: translateX(-50%);
          border-bottom-left-radius: calc(var(--inset-width));
          border-bottom-right-radius: calc(var(--inset-width));
          background-color: var(--wash-color);
        }

        .device-inner {
          --radius-amount: 6%;
          --radius: calc(var(--radius-amount) * var(--aspect-ratio)) /
            var(--radius-amount);
          position: absolute;
          top: var(--inset-width);
          left: var(--inset-width);
          right: var(--inset-width);
          bottom: var(--inset-width);
          border-radius: var(--radius);
          overflow: hidden;
        }
      `}</style>
    </>
  )
}
