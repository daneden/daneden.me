import SyntaxHighlight from "@/components/SyntaxHighlight"

const GlobalStyles = () => (
  <>
    <SyntaxHighlight />
    <style global jsx>
      {`
        :root {
          color-scheme: light dark;
          --gray-hue: 32;
          --gray-sat-mult: 0.9;

          --gray00: hsl(var(--gray-hue), calc(var(--gray-sat-mult) * 50%), 98%);
          --gray05: hsl(var(--gray-hue), calc(var(--gray-sat-mult) * 40%), 95%);
          --gray10: hsl(var(--gray-hue), calc(var(--gray-sat-mult) * 40%), 90%);
          --gray20: hsl(var(--gray-hue), calc(var(--gray-sat-mult) * 40%), 70%);
          --gray30: hsl(var(--gray-hue), calc(var(--gray-sat-mult) * 30%), 30%);
          --gray35: hsl(var(--gray-hue), calc(var(--gray-sat-mult) * 15%), 20%);
          --gray40: hsl(var(--gray-hue), calc(var(--gray-sat-mult) * 30%), 5%);

          --baseline: 1.6;
          --xxs: 0.125;
          --xs: 0.5;
          --s: 0.75;
          --m: 1;
          --l: 1.5;
          --xl: 2.25;
          --xxl: 3;

          --sp-xxs: calc(var(--xxs) * 1rem);
          --sp-xs: calc(var(--xs) * 1rem);
          --sp-s: calc(var(--s) * 1rem);
          --sp-m: calc(var(--m) * 1rem);
          --sp-l: calc(var(--l) * 1rem);
          --sp-xl: calc(var(--xl) * 1rem);
          --sp-xxl: calc(var(--xxl) * 1rem);

          --container-width: 32rem;
          --page-width: calc(
            var(--container-width) + (var(--baseline) * var(--m) * 2)
          );
          --content-width: calc(0.25rem + (100vw - var(---page-width)) / 2);

          --breakpoint-narrow: 50em;
          --breakpoint-medium: 64em;

          --site-color: #dd425c;
          --text-color: var(--gray40);
          --meta-color: var(--gray30);
          --wash-color: var(--gray00);
          --mark-color: rgba(255, 200, 0, 0.15);
          --highlight-color: #ffc800;
          --hover-color: var(--site-color);
          --code-wash: #fff;
          --code-color: #222;

          --grid-spec: minmax(0, 1fr) minmax(auto, var(--container-width))
            minmax(0, 1fr);
          --center-column: 2 / 3;

          --font-mono: "JetBrains Mono", monospace;
          --font-sans: "Soehne", system-ui, -apple-system, sans-serif;
          --font-sans-extended: "Soehne Breit", var(--font-sans);
          --font-serif: "Tiempos Text", Georgia, serif;
          --font-body: var(--font-serif);
          --font-heading: var(--font-serif);
          --font-caption: var(--font-sans);
        }

        @media (max-width: 50em) {
          :root {
            --grid-spec: minmax(100%, 1fr);
            --center-column: 1 / -1;
          }
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --text-color: var(--gray00);
            --meta-color: var(--gray10);
            --wash-color: var(--gray40);
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
          margin-bottom: var(--sp-m);
          max-width: 100%;
        }

        html {
          background-color: var(--wash-color);
          color: var(--text-color);
          font-family: var(--font-body);
          font-size: clamp(100%, 2.5vw, 125%);
          line-height: var(--baseline);
          padding-left: var(--sp-m);
          padding-right: var(--sp-m);
          font-feature-settings: "ss02" 1;
          font-variant-alternates: stylistic(ss02);
        }

        #__next {
          display: flex;
          flex-direction: column;
        }

        ul,
        ol {
          margin-bottom: var(--sp-m);
          padding-left: var(--sp-l);
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

        .footnotes {
          font-family: var(--font-caption);
        }

        .footnotes ol {
          padding-left: 0;
        }

        .footnotes li {
          margin-bottom: var(--sp-xs);
          font-size: var(--sp-s);
          color: var(--meta-color);
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

        h1,
        .h1 {
          font-family: var(--font-sans-extended);
          font-size: var(--sp-xl);
          font-weight: 700;
          hyphens: initial;
          line-height: 1.1;
          margin-bottom: var(--sp-m);
          padding-bottom: var(--sp-l);
          padding-top: var(--sp-xl);
        }

        blockquote {
          border-left: 2px solid var(--site-color);
          font-style: italic;
          padding-left: var(--sp-m);
          margin-bottom: var(--sp-m);
        }

        h2 {
          font-family: var(--font-heading);
          font-size: var(--sp-m);
          font-weight: 400;
          font-style: italic;
          hyphens: initial;
          margin-bottom: var(--sp-m);
          padding-top: var(--sp-s);
        }

        h3 {
          font-family: var(--font-sans);
          font-size: var(--sp-m);
          font-weight: 400;
          font-style: italic;
          color: var(--meta-color);
          hyphens: initial;
        }

        hr {
          border: 0;
          border-top: 1px solid var(--meta-color);

          display: block;
          margin: var(--sp-l) 0;
        }

        mark {
          background-color: var(--mark-color);
          border-radius: var(--sp-xxs);
          color: inherit;
          margin-left: calc(var(--sp-xxs) * -1);
          margin-right: calc(var(--sp-xxs) * -1);
          padding-left: var(--sp-xxs);
          padding-right: var(--sp-xxs);
        }

        p {
          margin-bottom: var(--sp-m);
        }

        pre,
        code {
          padding: 0.15em 0.25em;
          vertical-align: baseline;
          background-color: var(--code-wash);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.125);
          border-radius: 0.5em;
          font-family: var(--font-mono);
          font-size: 0.875rem;
          line-height: 1;
          letter-spacing: -0.025em;
          color: var(--code-color);
        }

        pre {
          display: block;
          line-height: 1.5;
          overflow: auto;
          padding: var(--sp-xs);
          margin: 0 calc(var(--sp-xs) * -1);
          vertical-align: baseline;
          white-space: pre;
          margin-bottom: var(--sp-m);
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
          margin-bottom: var(--sp-m);
        }

        figure :global(img) {
          display: block;
          width: 100%;
          flex: 1 1 auto;
          order: 2;
        }

        figure :global(figcaption) {
          font-family: var(--font-caption);
          order: 3;
          margin-top: var(--sp-xxs);
          color: var(--meta-color);
        }

        small,
        .small,
        figcaption {
          font-family: var(--font-caption);
          font-size: var(--sp-s);
          letter-spacing: 0.025em;
          line-height: var(--baseline);
        }

        .meta,
        .receded,
        figcaption {
          color: var(--meta-color);
        }

        table {
          hyphens: initial;
          margin-bottom: var(--sp-m);
          border-collapse: collapse;
        }

        table :global(th),
        table :global(td) {
          vertical-align: top;
          padding: var(--sp-xs);
          padding-top: var(--sp-xxs);
          padding-bottom: var(--sp-xxs);
        }

        table :global(th) {
          font-weight: 600;
          font-size: var(--sp-s);
          border-bottom: 1px solid;
        }

        aside {
          background-color: var(--mark-color);
          border-left: 2px solid var(--highlight-color);
          color: inherit;
          margin-bottom: var(--sp-m);
          padding: var(--sp-s);
        }

        .zm {
          margin: 0;
        }

        .serif {
          font-family: var(--font-serif);
        }

        .sans {
          font-family: var(--font-sans);
        }
      `}
    </style>
  </>
)

export default GlobalStyles
