import { GraphQLClient } from "graphql-request";
export const client = new GraphQLClient(
	`${process.env.NEXT_PUBLIC_HOST}/graphql`,
	{
		headers: {},
	}
);

export const clientSsr = new GraphQLClient(`${process.env.HOST}/graphql`, {
	headers: {},
});
