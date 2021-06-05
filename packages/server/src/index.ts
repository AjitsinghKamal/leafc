import Fastify, { FastifyRequest } from "fastify";
import mercurius, { IResolvers, MercuriusLoaders } from "mercurius";
import { gql } from "mercurius-codegen";

export const app = Fastify();

const buildContext = async (req: FastifyRequest) => {
	return {
		authorization: req.headers.authorization,
	};
};

type PromiseType<T> = T extends PromiseLike<infer U> ? U : T;

declare module "mercurius" {
	type MercuriusContext = PromiseType<ReturnType<typeof buildContext>>;
}

const resolvers: IResolvers = {};

const loaders: MercuriusLoaders = {};

app.register(mercurius, {
	schema,
	resolvers,
	loaders,
	context: buildContext,
	subscription: false,
});

// app.listen(8000)
