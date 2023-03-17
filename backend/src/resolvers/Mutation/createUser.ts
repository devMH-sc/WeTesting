import { Context } from '../../context';
import { User } from '../../models/userModel';

interface CreateUserArgs {
	input: User;
}

export const Mutation = {
	createUser: async (parent: any, args: CreateUserArgs, context: Context) => {
		const existingUser = await context.prisma.user.findUnique({
			where: { email: args.input.email },
		});

		if (existingUser) {
			throw new Error('Email already in use');
		}

		return context.prisma.user.create({
			data: args.input,
		});
	},
};
