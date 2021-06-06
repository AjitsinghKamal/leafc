import { gql } from "mercurius-codegen";

export const typeDef = gql`
	type Product {
		title: String!
		price: String!
		short_description: String!
		long_description: String
	}
`;
