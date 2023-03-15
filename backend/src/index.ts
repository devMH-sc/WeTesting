import { createServer } from "http"
import express from "express"
import { ApolloServer, gql } from "apollo-server-express"

const startServer = async () => {

  const port = process.env.PORT || 4000
  const app = express()
  const httpServer = createServer(app)

  const typeDefs = gql`
  type Query {
    hello:String
  }`

  const resolvers = {
    Query: { hello: () => 'Hello devMH' }
  }

  const apolloServer = new ApolloServer({
    typeDefs, resolvers
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({
    app, path: '/api'
  })

  httpServer.listen({ port: port }, () => {
    console.log(`Server ta on: localhost:${port}${apolloServer.graphqlPath}`)
  })
}

startServer()