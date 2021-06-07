import cx from "classnames";
import SadIcon from "assets/sad.svg";
import css from "./Placeholder.module.scss";

type Props = {
	msg: string;
};
function Placeholder({ msg }: Props) {
	return (
		<div className={cx("card", css.placeholder)}>
			<SadIcon className={css.placeholder_icon} />
			<p className={css.placeholder_msg}>{msg}</p>
		</div>
	);
}

export default Placeholder;
