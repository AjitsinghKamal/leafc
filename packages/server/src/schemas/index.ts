import { typeDef as Product } from "./product";
import { typeDef as Category } from "./category";

const Query = `
	type Query {
		product(id: Int!): Product
		category(id: Int!): Category
	}
`;

export const mergedSchema = [Query, Product, Category];
