import styles from "./styles.module.css"

export default function ShapesAnimation() {
  return (
    <svg
      viewBox="0 0 424 424"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.root}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter
          id="shapes-anim-handdrawn"
          x="-10%"
          y="-10%"
          width="120%"
          height="120%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.0488"
            numOctaves="3"
            seed="1473"
            result="turb"
          >
            <animate
              attributeName="seed"
              values="1473;892;6234;9871;3210;4756;7283;5621;3417;6098"
              dur="1.2s"
              repeatCount="indefinite"
              calcMode="discrete"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="turb"
            scale="6"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>

      <g
        stroke="currentColor"
        strokeWidth="6"
        fill="none"
        className={styles.shapes}
      >
        <g className={styles.circle}>
          <circle
            cx="128"
            cy="132"
            r="60"
            filter="url(#shapes-anim-handdrawn)"
          />
        </g>
        <g className={styles.square}>
          <rect
            x="223"
            y="72"
            width="120"
            height="120"
            rx="5"
            filter="url(#shapes-anim-handdrawn)"
          />
        </g>
        <g className={styles.leftRect}>
          <rect
            x="223"
            y="225"
            width="39"
            height="120"
            rx="5"
            filter="url(#shapes-anim-handdrawn)"
          />
        </g>
        <g className={styles.rightRect}>
          <rect
            x="304"
            y="225"
            width="39"
            height="120"
            rx="5"
            filter="url(#shapes-anim-handdrawn)"
          />
        </g>
        <g className={styles.triangle}>
          <path
            d="M123.67 249.5C125.594 246.167 130.406 246.167 132.33 249.5L181.693 335C183.618 338.333 181.212 342.5 177.363 342.5H78.6367C74.7877 342.5 72.3821 338.333 74.3066 335L123.67 249.5Z"
            filter="url(#shapes-anim-handdrawn)"
          />
        </g>
      </g>
    </svg>
  )
}
