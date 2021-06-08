import { Children } from "react";
import css from "./Grid.module.scss";
import { Placeholder } from "components";
import SadIcon from "assets/sad.svg";

type Props = {
	style?: React.CSSProperties;
};

function Grid({
	children,
	style,
}: React.PropsWithChildren<Props>): JSX.Element {
	return (
		<div className={css.grid} style={style || undefined}>
			{children}
			{!Children.count(children) ? (
				<Placeholder
					className={css.grid_placeholder}
					msg="You haven't added any item to the cart yet!"
					icon={<SadIcon />}
				/>
			) : null}
		</div>
	);
}

export default Grid;
