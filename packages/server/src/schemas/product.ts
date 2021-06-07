import { IResolvers } from "mercurius";
import { gql } from "mercurius-codegen";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const typeDef = gql`
	extend type Query {
		allProducts: [Product]
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
		allProducts: async () => {
			return prisma.product.findMany({
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
			return prisma.product.findMany({
				where: {
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
				},
				include: {
					category: true,
				},
			});
		},
	},
};
