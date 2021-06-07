import type { GraphQLResolveInfo } from "graphql";
import type { MercuriusContext } from "mercurius";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) =>
	| Promise<import("mercurius-codegen").DeepPartial<TResult>>
	| import("mercurius-codegen").DeepPartial<TResult>;
export type RequireFields<T, K extends keyof T> = {
	[X in Exclude<keyof T, K>]?: T[X];
} &
	{ [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	_FieldSet: any;
};

export type Query = {
	__typename?: "Query";
	category?: Maybe<Category>;
	categories: Array<Category>;
	allProducts?: Maybe<Array<Maybe<Product>>>;
	product?: Maybe<Product>;
	products?: Maybe<Array<Maybe<Product>>>;
};

export type QuerycategoryArgs = {
	id: Scalars["Int"];
};

export type QueryproductArgs = {
	id: Scalars["Int"];
};

export type QueryproductsArgs = {
	categoryId?: Maybe<Scalars["Int"]>;
	searchTxt?: Maybe<Scalars["String"]>;
};

export type Product = {
	__typename?: "Product";
	id: Scalars["ID"];
	title: Scalars["String"];
	price: Scalars["Float"];
	description: Scalars["String"];
	category?: Maybe<Category>;
	image: Scalars["String"];
};

export type Category = {
	__typename?: "Category";
	id: Scalars["ID"];
	title: Scalars["String"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
	fragment: string;
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
	selectionSet: string;
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
	| LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
	| NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {}
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {}
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Query: ResolverTypeWrapper<{}>;
	Int: ResolverTypeWrapper<Scalars["Int"]>;
	String: ResolverTypeWrapper<Scalars["String"]>;
	Product: ResolverTypeWrapper<Product>;
	ID: ResolverTypeWrapper<Scalars["ID"]>;
	Float: ResolverTypeWrapper<Scalars["Float"]>;
	Category: ResolverTypeWrapper<Category>;
	Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Query: {};
	Int: Scalars["Int"];
	String: Scalars["String"];
	Product: Product;
	ID: Scalars["ID"];
	Float: Scalars["Float"];
	Category: Category;
	Boolean: Scalars["Boolean"];
};

export type QueryResolvers<
	ContextType = MercuriusContext,
	ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
	category?: Resolver<
		Maybe<ResolversTypes["Category"]>,
		ParentType,
		ContextType,
		RequireFields<QuerycategoryArgs, "id">
	>;
	categories?: Resolver<
		Array<ResolversTypes["Category"]>,
		ParentType,
		ContextType
	>;
	allProducts?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
		ParentType,
		ContextType
	>;
	product?: Resolver<
		Maybe<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		RequireFields<QueryproductArgs, "id">
	>;
	products?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
		ParentType,
		ContextType,
		RequireFields<QueryproductsArgs, never>
	>;
};

export type ProductResolvers<
	ContextType = MercuriusContext,
	ParentType extends ResolversParentTypes["Product"] = ResolversParentTypes["Product"]
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	price?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
	description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	category?: Resolver<
		Maybe<ResolversTypes["Category"]>,
		ParentType,
		ContextType
	>;
	image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
	ContextType = MercuriusContext,
	ParentType extends ResolversParentTypes["Category"] = ResolversParentTypes["Category"]
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = MercuriusContext> = {
	Query?: QueryResolvers<ContextType>;
	Product?: ProductResolvers<ContextType>;
	Category?: CategoryResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MercuriusContext> = Resolvers<ContextType>;

type Loader<TReturn, TObj, TParams, TContext> = (
	queries: Array<{
		obj: TObj;
		params: TParams;
	}>,
	context: TContext & {
		reply: import("fastify").FastifyReply;
	}
) => Promise<Array<import("mercurius-codegen").DeepPartial<TReturn>>>;
type LoaderResolver<TReturn, TObj, TParams, TContext> =
	| Loader<TReturn, TObj, TParams, TContext>
	| {
			loader: Loader<TReturn, TObj, TParams, TContext>;
			opts?: {
				cache?: boolean;
			};
	  };
export interface Loaders<
	TContext = import("mercurius").MercuriusContext & {
		reply: import("fastify").FastifyReply;
	}
> {
	Product?: {
		id?: LoaderResolver<Scalars["ID"], Product, {}, TContext>;
		title?: LoaderResolver<Scalars["String"], Product, {}, TContext>;
		price?: LoaderResolver<Scalars["Float"], Product, {}, TContext>;
		description?: LoaderResolver<Scalars["String"], Product, {}, TContext>;
		category?: LoaderResolver<Maybe<Category>, Product, {}, TContext>;
		image?: LoaderResolver<Scalars["String"], Product, {}, TContext>;
	};

	Category?: {
		id?: LoaderResolver<Scalars["ID"], Category, {}, TContext>;
		title?: LoaderResolver<Scalars["String"], Category, {}, TContext>;
	};
}
declare module "mercurius" {
	interface IResolvers
		extends Resolvers<import("mercurius").MercuriusContext> {}
	interface MercuriusLoaders extends Loaders {}
}
