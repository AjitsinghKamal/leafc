import Head from "next/head";
import { CartItem, DefaultLayout } from "components";
import { useCartStore } from "stores";

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
			<DefaultLayout>
				<div className={css.cart}>
					<main>
						{ids.map((itemId) => {
							return <CartItem {...items[itemId]} key={itemId} />;
						})}
					</main>
					<aside></aside>
				</div>
			</DefaultLayout>
		</>
	);
}
