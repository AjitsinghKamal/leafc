import Fastify, { FastifyRequest } from "fastify";
import fastifyCors from "fastify-cors";
import mercurius from "mercurius";
import mercuriusCodegen from "mercurius-codegen";

import { mergedSchema as schema, resolvers } from "./schemas";

export const app = Fastify();
app.register(fastifyCors, {
	origin: (origin, cb) => {
		if (!origin || /localhost/.test(origin)) {
			cb(null, true);
			return;
		}
		// Generate an error on other origins, disabling access
		cb(new Error("Not allowed"), false);
	},
});

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
