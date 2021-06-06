import { typeDef as Product, resolvers as ProductResolver } from "./product";
import { typeDef as Category } from "./category";

const Query = `
	type Query {
		category(id: Int!): Category
		categories: [Category!]!
	}
`;

export const mergedSchema = [Query, Product, Category];
export const resolvers = { ...ProductResolver };
