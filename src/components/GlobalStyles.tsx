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
          --code-wash: #fff;
          --code-color: #222;
          --grid-spec: minmax(0, 1fr) minmax(auto, ${Atoms.widths.container})
            minmax(0, 1fr);
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --site-color: ${Atoms.colors.siteDark};
            --text-color: ${Atoms.colors.wash};
            --meta-color: ${Atoms.colors.whiteAlpha};
            --wash-color: ${Atoms.colors.text};
            --code-wash: #222;
            --code-color: #eee;
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
          font-family: ${Atoms.font.family.body};
          font-size: clamp(100%, 2.5vw, 125%);
          line-height: ${Atoms.baseline};
          padding-left: ${Atoms.spacing.medium};
          padding-right: ${Atoms.spacing.medium};
          font-feature-settings: "ss02" 1;
          font-variant-alternates: stylistic(ss02);
        }

        #__next {
          display: flex;
          flex-direction: column;
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
          text-decoration-thickness: 2px;
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
          color: var(--hover-color);
          text-decoration: none;
        }

        h1 {
          font-family: ${Atoms.font.family.display};
          font-size: ${Atoms.font.size.h1};
          font-weight: 600;
          hyphens: initial;
          letter-spacing: -0.015em;
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
          font-weight: 600;
          hyphens: initial;
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
          border: 0;
          border-top: 1px solid var(--meta-color, ${Atoms.colors.meta});

          display: block;
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
        }

        pre,
        code {
          padding: 0.15em 0.25em;
          vertical-align: baseline;
          background-color: var(--code-wash);
          box-shadow: 0 1px 3px rgba(0,0,0,.125);
          border-radius: 0.5em;
          font-family: ${Atoms.font.family.mono};
          font-size: 0.875rem;
          line-height: 1;
          letter-spacing: -0.025em;
          color: var(--code-color)
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
          padding: 0;
          font-family: inherit;
          box-shadow: none;
          background-color: transparent;
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
        .small,
        figcaption {
          font-size: ${Atoms.font.size.small};
          letter-spacing: 0.025em;
          line-height: ${Atoms.baseline};
        }

        .meta,
        .receded,
        figcaption {
          color: var(--meta-color);
        }

        table {
          hyphens: initial;
          margin-bottom: ${Atoms.spacing.medium};
          border-collapse: collapse;
        }

        table :global(th),
        table :global(td) {
          vertical-align: top;
          padding: ${Atoms.spacing.xsmall};
          padding-top: ${Atoms.spacing.xxsmall};
          padding-bottom: ${Atoms.spacing.xxsmall};
        }

        table :global(th) {
          font-weight: 600;
          font-size: ${Atoms.font.size.small};
          border-bottom: 1px solid;
        }

        aside {
          background-color: ${Atoms.colors.mark};
          border-left: 2px solid ${Atoms.colors.highlight};
          color: inherit;
          margin-bottom: ${Atoms.spacing.medium};
          padding: ${Atoms.spacing.small};
        }

        .zm {
          margin: 0;
        }
      `}
    </style>
  </>
)

export default GlobalStyles
