type ProductType = {
	id: string;
	title: string;
	price: number;
	category: {
		title: string;
	};
	image: string;
};
type CartItem = ProductType & {
	quantity?: number;
};
