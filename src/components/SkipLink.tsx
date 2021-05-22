import Link from "next/link"

const SkipLink = () => (
  <>
    <nav>
      <Link href="#content">Skip to content</Link>
    </nav>
    <style jsx>{`
      nav {
        font-family: var(--font-sans);
        background-color: var(--highlight-color);
        color: var(--text-color);
        height: 0;
        margin: 0 calc(var(--sp-m) * -1);
        padding: var(--sp-xs) var(--sp-m);
        position: absolute;
        top: -100%;
      }

      nav :global(a) {
        --hover-color: var(--text-color);
      }

      nav:focus-within {
        height: auto;
        position: initial;
      }
    `}</style>
  </>
)

export default SkipLink
