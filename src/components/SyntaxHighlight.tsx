import React, { ReactElement } from "react"

export default function SyntaxHiglight(): ReactElement<unknown> {
  return (
    <style global jsx>
      {`
        /**
       * Modified version of the prism.js tomorrow night theme by Rose Pritchard
       * Based on https://github.com/chriskempson/tomorrow-theme
       * @author Rose Pritchard
       */

        :root {
          --c-color: #333;
          --c-strings: #00772d;
          --c-fns: #da2a00;
          --c-keyword: #a70da7;
          --c-classname: #f37d00;
          --c-operator: #0099b3;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --c-color: #eee;
          }
        }

        code[class*="language-"],
        pre[class*="language-"] {
          color: var(--c-color, --text-color, inherit);
          background: none;
          font-family: var(--font-mono), Consolas, Monaco, "Andale Mono",
            "Ubuntu Mono", monospace;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          word-wrap: normal;
          line-height: 1.5;
          tab-size: 2;
          hyphens: none;
          font-feature-settings: "dlig", "calt", "clig";
        }

        /* Code blocks */
        pre[class*="language-"] {
          box-sizing: content-box;
          margin: 0.5em -1em;
          margin-bottom: 1.5rem;
          overflow: auto;
          padding: 1em;
        }

        :not(pre) > code[class*="language-"],
        pre[class*="language-"] {
          background: rgba(0, 0, 0, 0.025);
        }

        @media (prefers-color-scheme: dark) {
          :not(pre) > code[class*="language-"],
          pre[class*="language-"] {
            background: rgba(255, 255, 255, 0.05);
          }
        }

        /* Inline code */
        :not(pre) > code[class*="language-"] {
          padding: 0.1em;
          border-radius: 0.3em;
          white-space: normal;
        }

        .token.comment,
        .token.block-comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: #888;
        }

        .token.punctuation {
          color: #888;
        }

        .token.tag,
        .token.attr-name,
        .token.namespace,
        .token.deleted {
          color: #e2777a;
        }

        .token.function-name,
        .token.backreference {
          color: #6196cc;
        }

        .token.boolean,
        .token.number,
        .token.function,
        .token.charset {
          color: var(--c-fns);
        }

        .token.property,
        .token.class-name,
        .token.constant,
        .token.symbol,
        .token.group,
        .token.alternation {
          color: var(--c-classname);
        }

        .token.selector,
        .token.important,
        .token.atrule,
        .token.keyword,
        .token.builtin,
        .token.quantifier {
          color: var(--c-keyword);
        }

        .token.string,
        .token.char,
        .token.attr-value,
        .token.regex,
        .token.variable {
          color: var(--c-strings);
        }

        .token.operator,
        .token.entity,
        .token.url {
          color: var(--c-operator);
        }

        .token.important,
        .token.bold {
          font-weight: bold;
        }
        .token.italic {
          font-style: italic;
        }

        .token.entity {
          cursor: help;
        }

        .token.inserted {
          color: green;
        }
      `}
    </style>
  )
}
