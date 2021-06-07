import { useRouter } from "next/router";
import { SearchBar } from "components";
import css from "./Header.module.scss";

function Header() {
	const router = useRouter();
	const redirectToCart = () => {
		router.push("/cart");
	};

	return (
		<header className={css.header}>
			<SearchBar />
			<button onClick={redirectToCart} className={css.header_cartbtn}>
				Your Cart
			</button>
		</header>
	);
}

export default Header;
