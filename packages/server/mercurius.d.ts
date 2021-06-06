/* eslint-disable */
import { buildContext } from "./src/main";

type PromiseType<T> = T extends PromiseLike<infer U> ? U : T;
declare module "mercurius" {
	interface MercuriusContext
		extends PromiseType<ReturnType<typeof buildContext>> {}
}
