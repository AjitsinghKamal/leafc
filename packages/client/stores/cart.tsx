import create from "zustand";

/** ---------------------
 * state slice for shopping cart
 * keeps track of active cart items
 *
 */

type CartState = {
	/**
	 * map of product detail and product id
	 * used for constant time access of cart item details
	 */
	products: Record<string, CartItem>;
	/**
	 * list of products ids in order of addition to the cart
	 * allows for straight-forward iteration
	 */
	productsIdOrder: string[];
	/**
	 * mutation for updating particular cartitems quantity
	 */
	changeProductQuantity: (T: string, C: number) => void;
	addProducts: (T: CartItem) => void;
	removeProducts: (T: string) => void;
	reset: () => void;
};

const useCartStore = create<CartState>((set) => ({
	productsIdOrder: [],
	products: {},
	changeProductQuantity: (productId, newCount) => {
		if (newCount > 0) {
			return set((state) => {
				return {
					products: {
						...state.products,
						[productId]: {
							...state.products[productId],
							quantity: newCount,
						},
					},
				};
			});
		}
	},
	addProducts: (newItem) =>
		set((state) => {
			const existInCart = state.products[newItem.id];
			const order = existInCart
				? [...state.productsIdOrder]
				: [...state.productsIdOrder, newItem.id];
			const quantity =
				existInCart && existInCart.quantity
					? existInCart.quantity + 1
					: 1;
			return {
				productsIdOrder: order,
				products: {
					...state.products,
					[newItem.id]: {
						...newItem,
						quantity,
					},
				},
			};
		}),
	removeProducts: (item) =>
		set((state) => {
			const _items = state.products;
			delete _items[item];
			return {
				productsIdOrder: state.productsIdOrder.filter(
					(id) => id !== item
				),
				products: _items,
			};
		}),
	reset: () =>
		set(() => {
			return {
				productsIdOrder: [],
				products: {},
			};
		}),
}));

export default useCartStore;
