import { GraphQLClient } from "graphql-request"

export const client = new GraphQLClient(process.env.HYGRAPH_URL as string, {
  fetch,
})
