import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import css from "./NavBtn.module.scss";

type Props = {
	to: string;
};
function NavBtn({ to, children }: PropsWithChildren<Props>) {
	const router = useRouter();
	const redirectToCart = () => {
		router.push(to);
	};
	return (
		<button onClick={redirectToCart} className={css.navbtn}>
			{children}
		</button>
	);
}

export default NavBtn;
