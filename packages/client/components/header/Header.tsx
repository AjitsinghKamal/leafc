import { SearchBar, CartNav } from "components";
import css from "./Header.module.scss";

export type Props = {
	overrideNav?: React.ReactNode;
};
function Header({ overrideNav }: Props) {
	return (
		<header className={css.header}>
			<SearchBar />
			{overrideNav || <CartNav />}
			{}
		</header>
	);
}

export default Header;
