import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
import { createContext } from './context';
import { resolvers } from './resolvers';

const typeDefs = importSchema('./src/schema/schema.graphql');

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: createContext,
});

server.listen().then(({ url }) => {
	console.log(`Server is running at ${url}`);
});
