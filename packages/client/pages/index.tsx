import { gql } from "@apollo/client";
import Head from "next/head";

import { ProductCard, Grid, DefaultLayout } from "components";
import type { ProductCardType } from "components";

import client from "graphql-client";

import css from "styles/Home.module.scss";

type Props = {
	products: ProductCardType[];
};

export default function Home({ products }: Props) {
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
							<ProductCard key={data.id} {...data} />
						))}
					</Grid>
				</main>
			</DefaultLayout>
		</>
	);
}

export async function getServerSideProps() {
	try {
		const {
			data: { products },
		} = await client.query({
			query: gql`
				query Products {
					products {
						id
						title
						price
						image
						category {
							title
						}
					}
				}
			`,
		});
		return {
			props: {
				products,
			},
		};
	} catch (e) {
		console.error(e);
	}
}
