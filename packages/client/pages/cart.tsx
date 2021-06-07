import Head from "next/head";

import useCartStore from "stores/cart";

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
			<main>
				{ids.map((itemId) => {
					<div>{items[itemId].title}</div>;
				})}
			</main>
		</>
	);
}
