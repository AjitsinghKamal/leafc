import { useMemo, useCallback, useState } from "react";
import Head from "next/head";
import {
	CartItem,
	DefaultLayout,
	CartDetail,
	OrderForm,
	Placeholder,
	NavBtn,
} from "components";
import { useCartStore } from "stores";
import cx from "classnames";
import css from "styles/Cart.module.scss";
import { client } from "graphql/client";
import { CHECKOUT } from "graphql/queries";
import SadIcon from "assets/sad.svg";
import WoWIcon from "assets/wow.svg";

export default function Cart() {
	const [items, ids, changeProductQuantity, resetCart, removeProducts] =
		useCartStore((state) => [
			state.products,
			state.productsIdOrder,
			state.changeProductQuantity,
			state.reset,
			state.removeProducts,
		]);

	const [state, setField] = useState({ email: "", address: "" });
	const [errorBag, setError] = useState({ email: "", address: "" });
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	/**
	 * memoized value of total cart price
	 */
	const totalCartAmount = useMemo(
		() =>
			ids.reduce((total, id) => {
				total += Number(
					(items[id].price * (items[id].quantity || 1)).toFixed(2)
				);
				return total;
			}, 0),
		[JSON.stringify(items)]
	);

	/**
	 * allows incrementing or decrementing cart item quantity
	 * @param factor if positive increment otherwise decrease value
	 * @param itemId Id of product
	 * @param oldValue value of quantity at the time of execution
	 */
	const handleUpdateInQuantity = useCallback(
		(itemId: string, oldValue: number, factor: 1 | -1) => {
			changeProductQuantity(itemId, oldValue + factor);
		},
		[]
	);

	/**
	 * sync input field values with state
	 *
	 */
	const handleFormFieldUpdate = ({
		value,
		name,
	}: {
		value: string;
		name: string;
	}) => {
		setField({ ...state, [name]: value });
		!value &&
			errorBag[name as "email" | "address"] &&
			setError({ ...state, [name]: value });
	};

	const verifyRequiredField = () => {
		const msg = "Field is required";
		let isValid = true;
		if (!state.email) {
			isValid = false;
			setError({ ...state, email: msg });
		}
		if (!state.address) {
			isValid = false;
			setError({ ...state, address: msg });
		}
		return isValid;
	};

	const shouldPlaceOrder = async () => {
		try {
			setSuccess(false);
			setLoading(true);
			await client.request(CHECKOUT, {
				email: state.email,
				address: state.address,
				pr: totalCartAmount,
				items: ids.map((id) => ({
					productId: +id,
					price: items[id].price,
					quantity: items[id].quantity,
				})),
			});
			resetCart();
			setSuccess(true);
			setField({ email: "", address: "" });
		} catch (e) {
			const { message, extensions } = e.response.errors[0];
			extensions.field &&
				setError({ ...state, [extensions.field]: message });
		} finally {
			setLoading(false);
		}
	};

	const shouldAttemptSubmit = useCallback(() => {
		if (verifyRequiredField()) {
			setError({ email: "", address: "" });
			shouldPlaceOrder();
		}
	}, [verifyRequiredField, shouldPlaceOrder]);

	return (
		<>
			<Head>
				<title>Leafc | Cart</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<DefaultLayout
				overrideNav={<NavBtn to="/">Go Back To Home</NavBtn>}
			>
				<div className={cx("pageContainer", css.cart)}>
					<main className={css.cart_col}>
						{ids.length ? (
							ids.map((itemId) => {
								return (
									<CartItem
										{...items[itemId]}
										key={itemId}
										onRemove={removeProducts}
										onQuantityUpdate={
											handleUpdateInQuantity
										}
									/>
								);
							})
						) : success ? (
							<Placeholder
								msg="Congrats! your order has been placed"
								icon={<WoWIcon />}
							/>
						) : (
							<Placeholder
								msg="You haven't added any item to the cart yet!"
								icon={<SadIcon />}
							/>
						)}
					</main>
					<aside className={css.cart_col}>
						<CartDetail totalAmount={totalCartAmount}>
							<OrderForm
								email={state.email}
								address={state.address}
								emailError={errorBag.email}
								addressError={errorBag.address}
								onSubmit={shouldAttemptSubmit}
								loading={loading}
								disable={!ids.length}
								handleFormFieldUpdate={handleFormFieldUpdate}
							/>
						</CartDetail>
					</aside>
				</div>
			</DefaultLayout>
		</>
	);
}
