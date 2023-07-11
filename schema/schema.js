// const {gql} = require('@apollo/server')

export const typeDefs = `#graphql
type Game {
    id: ID!, # !: means this is required 
    title: String!,
    platform: [String!]!,
}
type Review {
    id: ID!
    rating: Int!
    content: String!
}
type Author {
    id: ID!
    name: String!
    verified: Boolean!
}
type Query {  # its need to have, it's not optional
reviews: [Review]
review(id: ID!): Review
games: [Game]
author(id: ID!): Author
authors: [Author]

}
`