export type Props = {
	id?: string;
	title: string;
	price: number;
	category: {
		title: string;
	};
};

function ProductCard({ title, price, category }: Props): JSX.Element {
	return (
		<div>
			<span>{price}</span>
			<span>{title}</span>
			<span>{category.title}</span>
		</div>
	);
}

export default ProductCard;
