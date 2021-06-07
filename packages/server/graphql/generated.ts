import type {
	GraphQLResolveInfo,
	GraphQLScalarType,
	GraphQLScalarTypeConfig,
} from "graphql";
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
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	DateTime: any;
	_FieldSet: any;
};

export type Query = {
	__typename?: "Query";
	category?: Maybe<Category>;
	categories: Array<Category>;
	product?: Maybe<Product>;
	products?: Maybe<Array<Maybe<Product>>>;
	order?: Maybe<Order>;
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

export type QueryorderArgs = {
	id: Scalars["Int"];
};

export type Mutation = {
	__typename?: "Mutation";
	postOrder?: Maybe<Order>;
};

export type MutationpostOrderArgs = {
	email: Scalars["String"];
	address: Scalars["String"];
	price: Scalars["Float"];
	items: Array<Maybe<OrderItemInput>>;
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

export type Order = {
	__typename?: "Order";
	id: Scalars["ID"];
	email: Scalars["String"];
	address: Scalars["String"];
	createdAt: Scalars["DateTime"];
	updatedAt: Scalars["DateTime"];
	price: Scalars["Float"];
	items: Array<OrderItem>;
};

export type OrderItemInput = {
	productId: Scalars["Int"];
	price: Scalars["Float"];
	quantity: Scalars["Int"];
};

export type OrderItem = {
	__typename?: "OrderItem";
	productId: Scalars["Int"];
	price: Scalars["Float"];
	quantity: Scalars["Int"];
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
	Mutation: ResolverTypeWrapper<{}>;
	Float: ResolverTypeWrapper<Scalars["Float"]>;
	DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
	Product: ResolverTypeWrapper<Product>;
	ID: ResolverTypeWrapper<Scalars["ID"]>;
	Order: ResolverTypeWrapper<Order>;
	OrderItemInput: OrderItemInput;
	OrderItem: ResolverTypeWrapper<OrderItem>;
	Category: ResolverTypeWrapper<Category>;
	Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Query: {};
	Int: Scalars["Int"];
	String: Scalars["String"];
	Mutation: {};
	Float: Scalars["Float"];
	DateTime: Scalars["DateTime"];
	Product: Product;
	ID: Scalars["ID"];
	Order: Order;
	OrderItemInput: OrderItemInput;
	OrderItem: OrderItem;
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
	order?: Resolver<
		Maybe<ResolversTypes["Order"]>,
		ParentType,
		ContextType,
		RequireFields<QueryorderArgs, "id">
	>;
};

export type MutationResolvers<
	ContextType = MercuriusContext,
	ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
	postOrder?: Resolver<
		Maybe<ResolversTypes["Order"]>,
		ParentType,
		ContextType,
		RequireFields<
			MutationpostOrderArgs,
			"email" | "address" | "price" | "items"
		>
	>;
};

export interface DateTimeScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
	name: "DateTime";
}

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

export type OrderResolvers<
	ContextType = MercuriusContext,
	ParentType extends ResolversParentTypes["Order"] = ResolversParentTypes["Order"]
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	address?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	createdAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
	price?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
	items?: Resolver<
		Array<ResolversTypes["OrderItem"]>,
		ParentType,
		ContextType
	>;
	isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<
	ContextType = MercuriusContext,
	ParentType extends ResolversParentTypes["OrderItem"] = ResolversParentTypes["OrderItem"]
> = {
	productId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	price?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
	quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
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
	Mutation?: MutationResolvers<ContextType>;
	DateTime?: GraphQLScalarType;
	Product?: ProductResolvers<ContextType>;
	Order?: OrderResolvers<ContextType>;
	OrderItem?: OrderItemResolvers<ContextType>;
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

	Order?: {
		id?: LoaderResolver<Scalars["ID"], Order, {}, TContext>;
		email?: LoaderResolver<Scalars["String"], Order, {}, TContext>;
		address?: LoaderResolver<Scalars["String"], Order, {}, TContext>;
		createdAt?: LoaderResolver<Scalars["DateTime"], Order, {}, TContext>;
		updatedAt?: LoaderResolver<Scalars["DateTime"], Order, {}, TContext>;
		price?: LoaderResolver<Scalars["Float"], Order, {}, TContext>;
		items?: LoaderResolver<Array<OrderItem>, Order, {}, TContext>;
	};

	OrderItem?: {
		productId?: LoaderResolver<Scalars["Int"], OrderItem, {}, TContext>;
		price?: LoaderResolver<Scalars["Float"], OrderItem, {}, TContext>;
		quantity?: LoaderResolver<Scalars["Int"], OrderItem, {}, TContext>;
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
