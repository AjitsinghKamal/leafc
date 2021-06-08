import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import css from "./NavBtn.module.scss";
import cx from "classnames";

type Props = {
	to: string;
	ghost?: boolean;
};
function NavBtn({ to, children, ghost }: PropsWithChildren<Props>) {
	const router = useRouter();
	const redirectToCart = () => {
		router.push(to);
	};
	return (
		<button
			onClick={redirectToCart}
			className={cx(css.navbtn, {
				[css.ghost]: ghost,
			})}
		>
			{children}
		</button>
	);
}

export default NavBtn;
