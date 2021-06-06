import { IResolvers } from "mercurius";
import { gql } from "mercurius-codegen";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const typeDef = gql`
	extend type Query {
		product(id: Int!): Product
		products(categoryId: Int): [Product]
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
		products: async (_, { categoryId }: { categoryId?: number }) => {
			return prisma.product.findMany({
				where: {
					categoryId,
				},
				include: {
					category: true,
				},
			});
		},
	},
};
