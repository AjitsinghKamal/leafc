type Props = {
	title: string;
	price: number;
	category: string;
};
function ProductCard({ title, price, category }: Props): JSX.Element {
	return (
		<div>
			<span>{price}</span>
			<span>{title}</span>
			<span>{category}</span>
		</div>
	);
}

export default ProductCard;
