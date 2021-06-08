import { SearchBar, CartNav } from "components";
import css from "./Header.module.scss";

export type Props = {
	overrideNav?: React.ReactNode;
};
function Header({ overrideNav }: Props) {
	return (
		<header className={css.header}>
			<div className={css.header_container}>
				<SearchBar />
				{overrideNav || <CartNav />}
				{}
			</div>
		</header>
	);
}

export default Header;
