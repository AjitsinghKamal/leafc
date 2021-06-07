import Image from "next/image";
import ImageLoader from "utils/ImageLoader";

import css from "./ProductCard.module.scss";

export type Props = {
	id?: string;
	title: string;
	price: number;
	category: {
		title: string;
	};
	image: string;
};

function ProductCard({
	title,
	price,
	category,
	image,
	onClick,
}: Props & {
	onClick: () => void;
}): JSX.Element {
	return (
		<div className={css.card}>
			<div className={css.card_pricecontainer}>
				<span className={css.card_pricecontainer_cost}>$ {price}</span>
				<div className={css.card_backdrop}></div>
				<Image
					className={css.card_image}
					loader={ImageLoader}
					src={image}
					alt={title}
					width={250}
					height={260}
				/>
			</div>
			<span className={css.card_category}>{category.title}</span>
			<span className={css.card_title}>{title}</span>
			<button onClick={onClick}>Add to Cart</button>
		</div>
	);
}

export default ProductCard;
