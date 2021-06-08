import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import { ProductCard, Grid, DefaultLayout, NavBtn } from "components";
import { useCartStore } from "stores";
import css from "styles/Home.module.scss";

import { clientSsr } from "graphql/client";
import { GET_PRODUCTS } from "graphql/queries";

import Arrow from "assets/arrow.svg";

type Props = {
	products: ProductType[];
};

export default function Home({ products }: Props) {
	const addToCart = useCartStore((state) => state.addProducts);
	const router = useRouter();

	return (
		<>
			<Head>
				<title>LeafC</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<DefaultLayout>
				<main className="pageContainer">
					<section className={css.meta}>
						{router.query.search ? (
							<div>
								<NavBtn to="/" ghost>
									<Arrow width={20} />
								</NavBtn>
								<h2>
									Plants matching &#8220;{router.query.search}
									&#8221;
								</h2>
							</div>
						) : (
							<h3>All Plants</h3>
						)}
					</section>
					<section>
						<Grid>
							{products.map((data) => (
								<ProductCard
									key={data.id}
									{...data}
									onClick={addToCart}
								/>
							))}
						</Grid>
					</section>
				</main>
			</DefaultLayout>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	try {
		const { products } = await clientSsr.request(GET_PRODUCTS, {
			by: query.search || "",
		});
		return {
			props: {
				products,
			},
		};
	} catch (e) {
		console.log(e);
		return {
			props: {
				products: [],
			},
		};
	}
};
