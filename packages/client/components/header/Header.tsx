import { useRouter } from "next/router";
import { Input } from "components";
import css from "./Header.module.scss";

import useProductSearch from "hooks/useProductSearch";

function Header() {
	const router = useRouter();
	const { searchText, updateSearchText, shouldFetchResult } =
		useProductSearch();

	const handleInputChange = ({ value }: { value: string }) => {
		updateSearchText(value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		shouldFetchResult();
	};

	const redirectToCart = () => {
		router.push("/cart");
	};

	return (
		<header className={css.header}>
			<form onSubmit={handleSubmit} className={css.header_searchbar}>
				<Input
					name="catelog_search"
					placeholder="Search for your plant"
					value={searchText}
					onChange={handleInputChange}
				/>
			</form>
			<button onClick={redirectToCart} className={css.header_cartbtn}>
				Your Cart
			</button>
		</header>
	);
}

export default Header;
