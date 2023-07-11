import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolvers } from "./schema/resolver.js";
import { typeDefs } from "./schema/schema.js";

// server setup
const server = new ApolloServer({
    // typeDefs -- definitions of types of data 
    typeDefs,
    // resolvers -- funtion to perform task
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log('Server ready at port', url);