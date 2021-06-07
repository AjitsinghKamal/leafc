import { IResolvers } from "mercurius";
import { gql } from "mercurius-codegen";
import { prisma } from "../client";

export const typeDef = gql`
	extend type Query {
		product(id: Int!): Product
		products(categoryId: Int, searchTxt: String): [Product]
	}
	type Product {
		id: ID!
		title: String!
		price: Float!
		description: String!
		category: Category
		image: String!
	}
`;

export const resolvers: IResolvers = {
	Query: {
		product: async (_, { id }) => {
			return prisma.product.findUnique({
				where: {
					id,
				},
				include: {
					category: true,
				},
			});
		},
		products: async (
			_,
			{
				categoryId,
				searchTxt,
			}: { categoryId?: number; searchTxt?: string }
		) => {
			const where =
				categoryId || searchTxt
					? {
							OR: [
								{ categoryId },
								{
									title: {
										contains: searchTxt,
									},
								},
								{
									description: {
										contains: searchTxt,
									},
								},
							],
					  }
					: undefined;
			return prisma.product.findMany({
				where,
				include: {
					category: true,
				},
			});
		},
	},
};
