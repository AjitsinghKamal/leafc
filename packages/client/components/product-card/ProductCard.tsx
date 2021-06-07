import cx from "classnames";
import Image from "next/image";
import ImageLoader from "utils/ImageLoader";

import css from "./ProductCard.module.scss";
import BagIcon from "assets/cart.svg";
export type Props = ProductType & {
	onClick?: (K: ProductType) => void;
};

function ProductCard({ id, title, price, category, image, onClick }: Props) {
	const handleClick = () => {
		onClick && onClick({ id, title, price, image, category });
	};
	return (
		<div className={cx("card", css.product)}>
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
			<div className={css.product_meta}>
				<span className={css.product_category}>{category.title}</span>
				<button onClick={handleClick} className={css.product_btn___add}>
					<BagIcon className={css.icon} />
					Add
				</button>
			</div>
			<span className={css.product_title}>{title}</span>
		</div>
	);
}

export default ProductCard;
