import { Server } from "https://deno.land/std@0.166.0/http/server.ts";
import { GraphQLHTTP } from "https://deno.land/x/gql@1.1.2/mod.ts";
import { dinoSchema } from "./dino_typedefs.ts";

const server = new Server({
  handler: async (req) => {
    const { pathname } = new URL(req.url);

    return pathname === "/graphql"
      ? await GraphQLHTTP<Request>({
          schema: dinoSchema,
          graphiql: true,
        })(req)
      : new Response("Not Found", { status: 404 });
  },
  port: 3000,
});

server.listenAndServe();

console.log(`GraphQL server listening on http://localhost:3000/graphql`);
