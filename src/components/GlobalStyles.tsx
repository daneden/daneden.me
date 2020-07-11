import { Atoms } from "./designSystem"

const GlobalStyles = () => (
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
        font-family: ${Atoms.font.family.sans};
        font-size: clamp(100%, 2.5vw, 125%);
        line-height: ${Atoms.baseline};
        padding-left: ${Atoms.spacing.medium};
        padding-right: ${Atoms.spacing.medium};
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
        marginbottom: ${Atoms.spacing.xsmall};
        font-size: ${Atoms.font.size.small};
        color: var(--meta-color, ${Atoms.colors.meta});
        letter-spacing: "0.025em";
      }

      .footnote-ref {
        font-variant-numeric: tabular-nums;
      }

      .footnote-backref {
        margin-left: 0.25em;
      }
    `}
  </style>
)

export default GlobalStyles
