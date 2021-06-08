import { Input } from "components";
import css from "./OrderForm.module.scss";
import Spin from "assets/spinner.svg";

export type Props = {
	onSubmit?: () => void;
	handleFormFieldUpdate: ({
		name,
		value,
	}: {
		name: string;
		value: string;
	}) => void;
	email: string;
	emailError?: string;
	address: string;
	addressError?: string;
	loading?: boolean;
	disable?: boolean;
};

function OrderForm({
	onSubmit,
	handleFormFieldUpdate,
	email,
	emailError,
	address,
	addressError,
	loading,
	disable,
}: Props) {
	const shouldSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit && !disable && onSubmit();
	};

	return (
		<div className={css.details}>
			<form onSubmit={shouldSubmit} className={css.details_form}>
				<Input
					label="Email Id"
					placeholder="Please provide your Email Id"
					onChange={handleFormFieldUpdate}
					value={email}
					name="email"
					error={emailError}
				/>
				<Input
					placeholder="Please provide your Address"
					onChange={handleFormFieldUpdate}
					value={address}
					name="address"
					label="Delivery Address"
					error={addressError}
				/>
				<button
					className={css.details_btn}
					disabled={disable || loading}
				>
					{loading ? (
						<Spin className={css.details_btn_icon} />
					) : (
						"Place Order"
					)}
				</button>
			</form>
		</div>
	);
}

export default OrderForm;
