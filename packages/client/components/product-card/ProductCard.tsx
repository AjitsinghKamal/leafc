import cx from "classnames";
import Image from "next/image";
import ImageLoader from "utils/ImageLoader";

import css from "./ProductCard.module.scss";

export type Props = ProductType & {
	onClick?: (K: ProductType) => void;
};

function ProductCard({
	id,
	title,
	price,
	category,
	image,
	onClick,
}: Props): JSX.Element {
	const handleClick = () => {
		onClick && onClick({ id, title, price, image, category });
	};
	return (
		<div className={cx(css.card, css.product)}>
			<div className={css.product_pricecontainer}>
				<span className={css.product_pricecontainer_cost}>
					$ {price}
				</span>
				<div className={css.product_backdrop}></div>
				<Image
					className={css.product_image}
					loader={ImageLoader}
					src={image}
					alt={title}
					width={250}
					height={260}
				/>
			</div>
			<span className={css.product_category}>{category.title}</span>
			<span className={css.product_title}>{title}</span>
			<button onClick={handleClick}>Add to Cart</button>
		</div>
	);
}

export default ProductCard;
