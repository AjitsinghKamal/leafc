import Head from "next/head";
import css from "styles/Home.module.scss";

import { ProductCard, Grid } from "components";

export default function Home(): JSX.Element {
	return (
		<div className={css.container}>
			<Head>
				<title>My page title</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<main>
				<div>
					<Grid>
						{[
							{
								title: "Lorem",
								category: "Ipsum",
								price: 100,
							},
						].map((data, index) => (
							<ProductCard key={index} {...data} />
						))}
					</Grid>
				</div>
			</main>
		</div>
	);
}
