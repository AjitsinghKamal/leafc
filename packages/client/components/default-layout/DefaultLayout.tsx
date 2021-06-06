import { Header } from "components";
import css from "./DefaultLayout.module.scss";

type Props = unknown;

function DefaultLayout({
	children,
}: React.PropsWithChildren<Props>): JSX.Element {
	return (
		<div className={css.layout}>
			<Header />
			{children}
		</div>
	);
}

export default DefaultLayout;
