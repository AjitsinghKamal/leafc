import css from "./Grid.module.scss";

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
		</div>
	);
}

export default Grid;
