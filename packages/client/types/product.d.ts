type ProductType = {
	id: string;
	title: string;
	price: number;
	category: {
		title: string;
	};
	image: string;
	description?: string;
};
type CartItem = ProductType & {
	quantity?: number;
};
