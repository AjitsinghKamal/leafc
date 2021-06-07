import { Header } from "components";
import type { HeaderProps } from "components";
import css from "./DefaultLayout.module.scss";

type Props = HeaderProps;

function DefaultLayout({
	children,
	...rest
}: React.PropsWithChildren<Props>): JSX.Element {
	return (
		<div className={css.layout}>
			<Header {...rest} />
			{children}
		</div>
	);
}

export default DefaultLayout;
