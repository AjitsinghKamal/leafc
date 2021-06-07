import create from "zustand";
import type { ProductCardType } from "components";

type ShopState = {
	products: ProductCardType[];
	loading: boolean;
	updateProducts: (T: ProductCardType[]) => void;
	setLoading: (T: boolean) => void;
};
const useShopStore = create<ShopState>((set) => ({
	products: [],
	updateProducts: (productList) =>
		set(() => {
			console.log("a", productList);
			return { products: productList };
		}),
	loading: false,
	setLoading: (value) => set(() => ({ loading: value })),
}));

export default useShopStore;
