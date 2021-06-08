import cx from "classnames";
import Image from "next/image";
import ImageLoader from "utils/ImageLoader";

import css from "./CartItem.module.scss";
import AddIcon from "assets/add.svg";
import MinIcon from "assets/minus.svg";
import CloseIcon from "assets/close.svg";

type Props = {
	onQuantityUpdate: (
		itemId: string,
		oldValue: number,
		factor: 1 | -1
	) => void;
	onRemove: (itemId: string) => void;
};
function CartItem({
	id,
	title,
	price,
	category,
	image,
	description,
	quantity,
	onQuantityUpdate,
	onRemove,
}: Props & CartItem) {
	return (
		<div className={cx("card", css.cartitem)}>
			<button
				className={css.cartitem_close}
				onClick={() => {
					onRemove(id);
				}}
			>
				<CloseIcon className={css.cartitem_close_icon} />
			</button>
			<div>
				<Image
					className={css.cartitem_image}
					loader={ImageLoader}
					src={image}
					alt={title}
					width={120}
					height={130}
				/>
			</div>
			<div className={css.cartitem_details}>
				<p className={css.cartitem_details_cat}>{category.title}</p>
				<span className={css.cartitem_details_title}>{title}</span>
				<span className={css.product_category}>{description}</span>
				<div className={css.cartitem_details_price}>
					<div>
						<span className={css.cost_label}>Cost</span>
						<span className={css.price}>${price}</span>
					</div>
					<div className={css.quant_wrap}>
						<span className={css.quant_label}>Quantity</span>
						<div className={css.quant}>
							<button
								className={css.btn___action}
								onClick={() =>
									onQuantityUpdate(id, quantity || 1, 1)
								}
							>
								<AddIcon className={css.icon} />
							</button>
							<span>{quantity}</span>
							<button
								className={css.btn___action}
								onClick={() =>
									onQuantityUpdate(id, quantity || 1, -1)
								}
							>
								<MinIcon className={css.icon} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
