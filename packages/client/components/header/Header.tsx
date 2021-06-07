import { useRouter } from "next/router";
import { SearchBar } from "components";
import css from "./Header.module.scss";

export type Props = {
	hideCartAction?: boolean;
};
function Header({ hideCartAction }: Props) {
	const router = useRouter();
	const redirectToCart = () => {
		router.push("/cart");
	};

	return (
		<header className={css.header}>
			<SearchBar />
			{!hideCartAction && (
				<button onClick={redirectToCart} className={css.header_cartbtn}>
					Your Cart
				</button>
			)}
		</header>
	);
}

export default Header;
