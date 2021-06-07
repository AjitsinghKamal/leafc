import { PropsWithChildren } from "react";
import css from "./CartDetails.module.scss";

type Props = {
	totalAmount: number;
};
function CardDetails({ totalAmount, children }: PropsWithChildren<Props>) {
	return (
		<div className={css.details}>
			<h2 className={css.details_title}>Order Details</h2>
			<div className={css.details_quote}>
				<span>Total Amount to Pay</span>
				<span className={css.details_quote_price}>$ {totalAmount}</span>
			</div>
			{children}
		</div>
	);
}

export default CardDetails;
