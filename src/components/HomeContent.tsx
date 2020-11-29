import { ReactElement } from "react"
import Breakout from "./Breakout"
import { Atoms } from "./designSystem"
import Image from "next/image"

export default function HomeContent({
  children,
}: {
  children: ReactElement<unknown>
}) {
  return (
    <>
      <div className="container">
        <figure>
          <Image height={200} src="/uploads/2020/11/face.jpg" width={200} />
        </figure>
        <div className="content">{children}</div>
      </div>
      <style jsx>{`
        .container {
          font-family: ${Atoms.font.family.display}, ${Atoms.font.family.body};
          font-size: 2.75rem;
          font-weight: 400;
          line-height: 1.25;
          position: relative;
          padding-top: 1rem;
        }

        @media (max-width: 600px) {
          .container {
            font-size: 2rem;
          }
        }

        .content {
          position: relative;
          z-index: 1;
          padding-bottom: 1rem;
        }

        figure {
          max-width: 33vmin;
          position: absolute;
          bottom: -4rem;
          right: 0rem;
          transform: rotate(-12deg);
          clip-path: polygon(
            46% 0%,
            83% 11%,
            100% 43%,
            86% 78%,
            48% 100%,
            42% 100%,
            10% 78%,
            3% 43%,
            20% 12%
          );
        }
      `}</style>
    </>
  )
}
