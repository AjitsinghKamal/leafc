import create from "zustand";

type ShopState = {
	products: ProductType[];
	loading: boolean;
	updateProducts: (T: ProductType[]) => void;
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
