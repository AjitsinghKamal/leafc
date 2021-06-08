import mercurius, { IResolvers } from "mercurius";
import { gql } from "mercurius-codegen";
import { prisma } from "../client";
import { emailRegexp } from "../utils/regex";
const { ErrorWithProps } = mercurius;
export const typeDef = gql`
	extend type Query {
		order(id: Int!): Order
	}

	type Order {
		id: ID!
		email: String!
		address: String!
		createdAt: DateTime!
		updatedAt: DateTime!
		price: Float!
		items: [OrderItem!]!
	}
	input OrderItemInput {
		productId: Int!
		price: Float!
		quantity: Int!
	}
	type OrderItem {
		productId: Int!
		price: Float!
		quantity: Int!
	}
`;

export const resolvers: IResolvers = {
	Query: {
		order: async (_, { id }) => {
			return prisma.order.findUnique({
				where: {
					id,
				},
			});
		},
	},
	Mutation: {
		postOrder: async (_, { email, address, price, items }) => {
			const isValid = emailRegexp.test(email);
			if (!isValid) {
				throw new ErrorWithProps("Invalid Email Id", {
					field: "email",
				});
			}
			return prisma.order.create({
				data: {
					email,
					address,
					price,
					OrderItem: {
						create: items.map(
							({
								productId,
								price,
								quantity,
							}: {
								productId: number;
								price: number;
								quantity: number;
							}) => ({
								price,
								quantity,
								product: {
									connect: { id: productId },
								},
							})
						),
					},
				},
			});
		},
	},
};
