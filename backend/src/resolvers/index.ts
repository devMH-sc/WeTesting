import { Query as QueryResolvers } from './Query/users';
import { Mutation as MutationResolvers } from './Mutation/createUser';

export const resolvers = {
	Query: { ...QueryResolvers },
	Mutation: { ...MutationResolvers },
};
