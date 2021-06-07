import { request } from "graphql-request";
import Head from "next/head";

import { ProductCard, Grid, DefaultLayout } from "components";

import useSearchStore from "stores/search";
import useShopStore from "stores/shop";
import css from "styles/Home.module.scss";
import useCartStore from "stores/cart";

type Props = {
	allProducts: ProductType[];
};

export default function Home({ allProducts }: Props) {
	const searchText = useSearchStore((state) => state.searchInput);
	const products = useShopStore((state) => {
		return state.products && state.products.length
			? state.products
			: allProducts;
	});
	const addToCart = useCartStore((state) => state.addProducts);
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
				<main className={css.container}>
					<Grid>
						{products.map((data) => (
							<ProductCard
								key={data.id}
								{...data}
								onClick={addToCart}
							/>
						))}
					</Grid>
				</main>
			</DefaultLayout>
		</>
	);
}

export async function getServerSideProps() {
	try {
		const { allProducts } = await request(
			`${process.env.HOST}/graphql`,
			GET_ALL_PRODUCTS
		);
		return {
			props: {
				allProducts,
			},
		};
	} catch (e) {
		return {
			props: {
				allProducts: [],
			},
		};
	}
}
