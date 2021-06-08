import css from "./Input.module.scss";
import cx from "classnames";

type onChangeArg = {
	value: string;
	name: string;
};
type Props = {
	value: string;
	name: string;
	placeholder: string;
	error?: string;
	label?: string;
	onChange: (T: onChangeArg) => void;
};
function Input({ value, onChange, name, error, label, placeholder }: Props) {
	const shouldHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget;
		onChange &&
			onChange({
				value,
				name,
			});
	};
	return (
		<div className={css.input_wrap}>
			{label && (
				<label htmlFor={name} className={css.input_label}>
					{label}
				</label>
			)}
			<input
				className={cx(css.input, { [css.input___hasErr]: error })}
				onChange={shouldHandleChange}
				name={name}
				value={value}
				placeholder={placeholder}
			/>
			{error && <small className={css.input_err}>{error}</small>}
		</div>
	);
}

export default Input;
