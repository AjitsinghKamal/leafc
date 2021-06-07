import { GraphQLClient } from "graphql-request";
const client = new GraphQLClient(`${process.env.NEXT_PUBLIC_HOST}/graphql`, {
	headers: {},
});

export default client;
