import Fastify, { FastifyRequest } from "fastify";
import mercurius from "mercurius";
import mercuriusCodegen from "mercurius-codegen";

import { mergedSchema as schema, resolvers } from "./schemas";

export const app = Fastify();

export const buildContext = async (req: FastifyRequest) => {
	return {
		authorization: req.headers.authorization,
	};
};

app.register(mercurius, {
	schema,
	resolvers,
	context: buildContext,
	graphiql: "playground",
	subscription: false,
});

mercuriusCodegen(app, {
	targetPath: "./graphql/generated.ts",
}).catch(console.error);

app.listen(8000);
