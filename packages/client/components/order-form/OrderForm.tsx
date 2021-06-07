import { useState } from "react";
import { Input } from "components";
import css from "./OrderForm.module.scss";

type Props = {
	onSubmit?: () => void;
};

const MISSING_FIELD_MSG = "Field is required";

function OrderForm({ onSubmit }: Props) {
	const [state, setField] = useState({
		email: "",
		address: "",
	});
	const [errorBag, setError] = useState({ email: "", address: "" });

	const handleFormFieldUpdate = ({
		value,
		name,
	}: {
		value: string;
		name: string;
	}) => {
		setField({ ...state, [name]: value });
	};

	const verifyIfFieldMissing = () => {
		if (!state.email) {
			setError({ ...state, email: MISSING_FIELD_MSG });
		}
		if (!state.address) {
			setError({ ...state, address: MISSING_FIELD_MSG });
		}
	};

	const shouldSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		verifyIfFieldMissing();
		onSubmit && onSubmit();
	};

	return (
		<div className={css.details}>
			<form onSubmit={shouldSubmit} className={css.details_form}>
				<Input
					label="Email Id"
					placeholder="Please provide your Email Id"
					onChange={handleFormFieldUpdate}
					value={state.email[0]}
					name="email"
					error={errorBag.email}
				/>
				<Input
					placeholder="Please provide your Address"
					onChange={handleFormFieldUpdate}
					value={state.address[0]}
					name="address"
					label="Delivery Address"
					error={errorBag.address}
				/>
				<button className={css.details_btn}>Place Order</button>
			</form>
		</div>
	);
}

export default OrderForm;
