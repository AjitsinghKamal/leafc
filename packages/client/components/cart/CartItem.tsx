import cx from "classnames";
import Image from "next/image";
import ImageLoader from "utils/ImageLoader";

import css from "./CartItem.module.scss";

function CartItem({ title, price, category, image }: CartItem) {
	return (
		<div className={cx("card", css.cartitem)}>
			<Image
				className={css.product_image}
				loader={ImageLoader}
				src={image}
				alt={title}
				width={250}
				height={260}
			/>
			<div className={css.product_pricecontainer}>
				<span className={css.product_pricecontainer_cost}>
					$ {price}
				</span>
				<div className={css.product_backdrop}></div>
			</div>
			<span className={css.product_category}>{category.title}</span>
			<span className={css.product_title}>{title}</span>
		</div>
	);
}

export default CartItem;
