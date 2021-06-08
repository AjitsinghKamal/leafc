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

export const CHECKOUT = gql`
	mutation Checkout(
		$email: String!
		$address: String!
		$pr: Float!
		$items: [OrderItemInput!]!
	) {
		postOrder(email: $email, address: $address, price: $pr, items: $items) {
			id
			email
		}
	}
`;
