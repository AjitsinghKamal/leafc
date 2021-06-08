import { NavBtn } from "components";
import { useCartStore } from "stores";
import css from "./CartNav.module.scss";

function CartNav() {
	const ids = useCartStore((state) => state.productsIdOrder);
	return (
		<NavBtn to="/cart">
			<>
				<span>Your Cart</span>
				{ids.length ? (
					<span className={css.badge}>{ids.length}</span>
				) : null}
			</>
		</NavBtn>
	);
}

export default CartNav;
