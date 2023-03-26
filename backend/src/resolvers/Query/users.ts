import { Context } from '../../context';

export const Query = {
	users: async (parent: any, args: any, context: Context) => {
		return context.prisma.user.findMany();
	},
};
