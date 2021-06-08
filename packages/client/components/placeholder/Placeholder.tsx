import cx from "classnames";
import css from "./Placeholder.module.scss";

type Props = {
	msg: string;
	icon: React.ReactNode;
};
function Placeholder({ msg, icon }: Props) {
	return (
		<div className={cx("card", css.placeholder)}>
			{icon}
			<p className={css.placeholder_msg}>{msg}</p>
		</div>
	);
}

export default Placeholder;
