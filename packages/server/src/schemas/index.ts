import { DateTimeTypeDefinition, DateTimeResolver } from "graphql-scalars";
import { typeDef as Product, resolvers as ProductResolver } from "./product";
import { typeDef as Category } from "./category";
import { typeDef as Order, resolvers as OrderResolver } from "./orders";

const Query = `
	type Query {
		category(id: Int!): Category
		categories: [Category!]!
	}
	type Mutation {
		postOrder(email: String!, address: String!, price: Float!, items: [OrderItemInput]!): Order
	}
`;

export const mergedSchema = [
	Query,
	Product,
	Order,
	Category,
	DateTimeTypeDefinition,
];
export const resolvers = {
	Query: {
		...ProductResolver.Query,
		...OrderResolver.Query,
	},
	Mutation: {
		...OrderResolver.Mutation,
	},
	DateTime: DateTimeResolver,
};
