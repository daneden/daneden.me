import Atoms from "./designSystem/atoms"
import SyntaxHighlight from "@/components/SyntaxHighlight"

const GlobalStyles = () => (
  <>
    <SyntaxHighlight />
    <style global jsx>
      {`
        :root {
          color-scheme: light dark;
          --site-color: ${Atoms.colors.siteLight};
          --text-color: ${Atoms.colors.text};
          --meta-color: ${Atoms.colors.blackAlpha};
          --wash-color: ${Atoms.colors.wash};
          --mark-color: ${Atoms.colors.mark};
          --highlight-color: ${Atoms.colors.highlight};
          --font-mono: ${Atoms.font.family.mono};
          --hover-color: var(--site-color);
          --code-wash: rgba(128, 128, 128, 0.075);
          --grid-spec: minmax(0, 1fr) minmax(auto, ${Atoms.widths.container})
            minmax(0, 1fr);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --site-color: ${Atoms.colors.siteDark};
            --text-color: ${Atoms.colors.wash};
            --meta-color: ${Atoms.colors.whiteAlpha};
            --wash-color: ${Atoms.colors.text};
          }
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        video {
          display: block;
          margin-bottom: ${Atoms.spacing.medium};
          max-width: 100%;
        }

        html {
          background-color: var(--wash-color);
          color: var(--text-color);
          flex: 1;
          font-family: ${Atoms.font.family.body};
          font-size: clamp(100%, 2.5vw, 125%);
          line-height: ${Atoms.baseline};
          padding-left: ${Atoms.spacing.medium};
          padding-right: ${Atoms.spacing.medium};
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        ul,
        ol {
          margin-bottom: ${Atoms.spacing.medium};
          padding-left: ${Atoms.spacing.medium};
        }

        a {
          color: inherit;
          text-decoration-line: underline;
          text-decoration-color: var(--hover-color) !important;
        }

        a:hover,
        a:focus {
          color: var(--hover-color);
        }

        .footnotes ol {
          padding-left: 0;
        }

        .footnotes li {
          margin-bottom: ${Atoms.spacing.xsmall};
          font-size: ${Atoms.font.size.small};
          color: var(--meta-color, ${Atoms.colors.meta});
          letter-spacing: "0.025em";
        }

        .footnotes li:target {
          background-color: var(--mark-color);
        }

        .footnote-ref {
          font-variant-numeric: tabular-nums;
        }

        .footnote-backref {
          margin-left: 0.25em;
        }

        sup[id^="fn"] a {
          color: var(--meta-color);
          text-decoration: none;
        }

        h1 {
          font-family: ${Atoms.font.family.display};
          font-size: 2.75rem;
          font-weight: 400;
          hyphens: initial;
          line-height: 1.1;
          margin-bottom: ${Atoms.spacing.medium};
          padding-bottom: ${Atoms.spacing.large};
          padding-top: ${Atoms.spacing.xlarge};
        }

        blockquote {
          border-left: 2px solid var(--site-color);
          font-style: italic;
          padding-left: ${Atoms.spacing.medium};
          margin-bottom: ${Atoms.spacing.medium};
        }

        h2 {
          font-size: ${Atoms.font.size.h2};
          font-weight: 400;
          hyphens: initial;
          letter-spacing: -0.025em;
          margin-bottom: ${Atoms.spacing.medium};
          padding-top: ${Atoms.spacing.small};
        }

        h3 {
          font-size: ${Atoms.font.size.regular};
          font-weight: 400;
          hyphens: initial;
          font-style: italic;
        }

        hr {
          border: 2px solid var(--meta-color, ${Atoms.colors.meta});

          display: block;
          height: 1;
          margin: ${Atoms.spacing.large} 0;
        }

        mark {
          background-color: ${Atoms.colors.mark};
          border-radius: ${Atoms.spacing.xxsmall};
          color: inherit;
          margin-left: -${Atoms.spacing.xxsmall};
          margin-right: -${Atoms.spacing.xxsmall};
          padding-left: ${Atoms.spacing.xxsmall};
          padding-right: ${Atoms.spacing.xxsmall};
        }

        p {
          margin-bottom: ${Atoms.spacing.medium};
          font-variant-numeric: oldstyle-nums;
        }

        pre,
        code {
          padding: 0.1em 0.25em;
          vertical-align: baseline;
          background-color: var(--code-wash);
          box-shadow: inset 0 0 0 1px var(--code-wash),
            inset 0 0 0 1px var(--code-wash);
          border-radius: 0.35em;
          font-family: ${Atoms.font.family.mono};
          font-size: 0.875em;
          line-height: 1;
          letter-spacing: -0.025em;
        }

        pre {
          display: block;
          line-height: 1.5;
          overflow: auto;
          padding: ${Atoms.spacing.xsmall};
          margin: 0 -${Atoms.spacing.xsmall};
          vertical-align: baseline;
          white-space: pre;
          margin-bottom: ${Atoms.spacing.medium};
        }

        pre :global(code) {
          font-family: inherit;
        }

        figure {
          display: flex;
          flex-direction: column;
          justify-content: center;
          writing-mode: horizontal-tb;
          margin-bottom: ${Atoms.spacing.medium};
        }

        figure :global(img) {
          display: block;
          width: 100%;
          flex: 1 1 auto;
          order: 2;
        }

        figure :global(figcaption) {
          order: 3;
          margin-top: ${Atoms.spacing.xxsmall};
          color: var(--meta-color);
        }

        small,
        figcaption {
          font-size: ${Atoms.font.size.small};
          letter-spacing: 0.025em;
          line-height: ${Atoms.baseline};
        }

        .meta,
        .receded,
        figcaption {
          color: var(--meta);
        }

        table {
          hyphens: initial;
          margin-bottom: ${Atoms.spacing.medium};
        }

        table :global(th),
        table :global(td) {
          vertical-align: top;
          padding: ${Atoms.spacing.xsmall};
          padding-top: 0;
        }

        table :global(th) {
          font-weight: normal;
          font-family: ${Atoms.font.family.mono};
        }

        .note {
          background-color: ${Atoms.colors.mark};
          border-left: 2px solid ${Atoms.colors.highlight};
          color: inherit;
          margin-bottom: ${Atoms.spacing.medium};
          padding: ${Atoms.spacing.small};
        }
      `}
    </style>
  </>
)

export default GlobalStyles
