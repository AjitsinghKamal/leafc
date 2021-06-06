import { gql } from "mercurius-codegen";

export const typeDef = gql`
	type Category {
		id: ID!
		title: String!
	}
`;
