import { gql } from "mercurius-codegen";

export const typeDef = gql`
	type Category {
		title: String!
		description: String!
	}
`;
