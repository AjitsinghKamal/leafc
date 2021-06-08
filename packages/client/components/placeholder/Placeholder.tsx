import cx from "classnames";
import css from "./Placeholder.module.scss";

type Props = {
	msg: string;
	icon: React.ReactNode;
	className?: string;
};
function Placeholder({ msg, icon, className }: Props) {
	return (
		<div className={cx("card", css.placeholder, className)}>
			{icon}
			<p className={css.placeholder_msg}>{msg}</p>
		</div>
	);
}

export default Placeholder;
