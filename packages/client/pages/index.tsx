import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

import { ProductCard, Grid, DefaultLayout } from "components";
import { useCartStore } from "stores";
import css from "styles/Home.module.scss";

import { clientSsr } from "graphql/client";
import { GET_PRODUCTS } from "graphql/queries";

type Props = {
	products: ProductType[];
};

export default function Home({ products }: Props) {
	const addToCart = useCartStore((state) => state.addProducts);
	const router = useRouter();

	return (
		<>
			<Head>
				<title>My page title</title>
			</Head>
			<DefaultLayout>
				<main className="pageContainer">
					<section className={css.meta}>
						<h3>
							{router.query.search
								? `Plants matching "${router.query.search}"`
								: "All Our Plants"}
						</h3>
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
