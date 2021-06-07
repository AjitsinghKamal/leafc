import Head from "next/head";
import {
	CartItem,
	DefaultLayout,
	CartDetail,
	OrderForm,
	Placeholder,
} from "components";
import { useCartStore } from "stores";
import cx from "classnames";
import css from "styles/Cart.module.scss";

export default function Cart() {
	const [items, ids] = useCartStore((state) => [
		state.products,
		state.productsIdOrder,
	]);
	return (
		<>
			<Head>
				<title>My page title</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<DefaultLayout hideCartAction>
				<div className={cx("pageContainer", css.cart)}>
					<main>
						{ids.length ? (
							ids.map((itemId) => {
								return (
									<CartItem {...items[itemId]} key={itemId} />
								);
							})
						) : (
							<Placeholder msg="You haven't added any item to the cart yet!" />
						)}
					</main>
					<aside>
						<CartDetail totalAmount={100}>
							<OrderForm />
						</CartDetail>
					</aside>
				</div>
			</DefaultLayout>
		</>
	);
}
