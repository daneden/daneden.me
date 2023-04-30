import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: process.env.HYGRAPH_URL,

  generates: {
    "src/hygraph.d.ts": {
      plugins: ["typescript"],
      config: {
        noExport: true,
      },
    },
  },
}
export default config
