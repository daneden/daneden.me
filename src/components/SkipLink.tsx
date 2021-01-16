import Atoms from "@/components/designSystem/atoms"
import Link from "next/link"

const SkipLink = () => (
  <>
    <nav>
      <Link href="#content">Skip to content</Link>
    </nav>
    <style jsx>{`
      nav {
        background-color: ${Atoms.colors.highlight};
        color: ${Atoms.colors.text};
        height: 0;
        margin: 0 -${Atoms.spacing.medium};
        padding: ${Atoms.spacing.xsmall} ${Atoms.spacing.medium};
        position: absolute;
        top: -100%;
      }

      nav :global(a) {
        --hover-color: ${Atoms.colors.text};
      }

      nav:focus-within {
        height: auto;
        position: initial;
      }
    `}</style>
  </>
)

export default SkipLink
