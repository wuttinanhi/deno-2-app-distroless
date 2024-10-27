import { gql } from "https://deno.land/x/graphql_tag@0.0.1/mod.ts";
import { makeExecutableSchema } from "https://deno.land/x/graphql_tools@0.0.2/mod.ts";

export const typeDefs = gql`
  type Query {
    allDinosaurs: [Dinosaur]
    oneDinosaur(name: String): Dinosaur
    dinosaurByIndex(index: Int): Dinosaur
  }

  type Dinosaur {
    name: String
    description: String
  }

  type Mutation {
    addDinosaur(name: String, description: String): Dinosaur
  }
`;

let DINO_DATA_MOCK = [
  {
    name: "Tyrannosaurus",
    description: "The largest of the theropods",
  },
  {
    name: "Stegosaurus",
    description: "The largest of the theropods",
  },
];

const allDinosaurs = async () => {
  return DINO_DATA_MOCK;
};

const oneDinosaur = async (args: any) => {
  return DINO_DATA_MOCK.find((dino) => dino.name === args.name);
};

const dinosaurByIndex = async (args: any) => {
  return DINO_DATA_MOCK[args.index];
};

const addDinosaur = async (args: any) => {
  DINO_DATA_MOCK = [...DINO_DATA_MOCK, args];
  return DINO_DATA_MOCK.at(-1);
};

export const resolvers = {
  Query: {
    allDinosaurs: () => allDinosaurs(),
    oneDinosaur: (_: any, args: any) => oneDinosaur(args),
    dinosaurByIndex: (_: any, args: any) => dinosaurByIndex(args),
  },
  Mutation: {
    addDinosaur: (_: any, args: any) => addDinosaur(args),
  },
};

export const dinoSchema = makeExecutableSchema({ resolvers, typeDefs });
