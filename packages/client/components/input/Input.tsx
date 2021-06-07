import css from "./Input.module.scss";

type onChangeArg = {
	value: string;
	name: string;
};
type Props = {
	value: string;
	name: string;
	placeholder: string;
	onChange: (T: onChangeArg) => void;
};
function Input({ value, onChange, name, ...rest }: Props) {
	const shouldHandleChange = (e: React.FormEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget;
		onChange &&
			onChange({
				value,
				name,
			});
	};
	return (
		<input
			className={css.input}
			onChange={shouldHandleChange}
			name={name}
			{...rest}
			value={value}
		/>
	);
}

export default Input;
