import { gql } from "https://deno.land/x/graphql_tag@0.0.1/mod.ts";
import { makeExecutableSchema } from "https://deno.land/x/graphql_tools@0.0.2/mod.ts";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => `Hello, World!`,
  },
};

const schema = makeExecutableSchema({ resolvers, typeDefs });
