import { gql } from "graphql-request";

export const GET_PRODUCTS = gql`
	query Products($by: String!) {
		products(searchTxt: $by) {
			id
			title
			price
			image
			category {
				title
			}
		}
	}
`;
