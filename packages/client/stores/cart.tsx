import create from "zustand";
import type { ProductCardType } from "components";

type CartItem = ProductCardType & {
	quantity: number;
	id: number;
};
type CartState = {
	products: Record<string, CartItem>;
	productsIdOrder: string[];
	changeProductQuantity: (T: string, C: number) => void;
	addProducts: (T: CartItem) => void;
	removeProducts: (T: string) => void;
};

const useCartStore = create<CartState>((set) => ({
	productsIdOrder: [],
	products: {},
	changeProductQuantity: (productId, newCount) =>
		set((state) => {
			return {
				products: {
					...state.products,
					[productId]: {
						...state.products[productId],
						quantity: newCount,
					},
				},
			};
		}),
	addProducts: (newItem) =>
		set((state) => {
			return {
				productsIdOrder: [...state.productsIdOrder, newItem.id],
				products: { ...state.products, [newItem.id]: newItem },
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
}));

export default useCartStore;
