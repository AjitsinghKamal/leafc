import { renderHook, act } from "@testing-library/react-hooks";
import useCartStore from "../cart";
//#endregion

test("item can be added to cart", async () => {
	const { result } = renderHook(() => useCartStore());
	const _product = {
		id: "1",
		title: "test",
		price: 1,
		category: { title: "test" },
		image: "test",
	};
	act(() => result.current.addProducts(_product));

	expect(result.current.productsIdOrder.length).toEqual(1);
	expect(result.current.products).toMatchObject({ [_product.id]: _product });
});

test("item can be removed from cart", async () => {
	const { result } = renderHook(() => useCartStore());
	const _product = {
		id: "1",
		title: "test",
		price: 1,
		category: { title: "test" },
		image: "test",
	};
	act(() => result.current.addProducts(_product));
	expect(result.current.productsIdOrder.length).toEqual(1);
	act(() => result.current.removeProducts(_product.id));

	expect(result.current.productsIdOrder.length).toEqual(0);
	expect(result.current.products).not.toMatchObject({
		[_product.id]: _product,
	});
});

test("item quantity can be changed in cart", async () => {
	const { result } = renderHook(() => useCartStore());
	const _product = {
		id: "1",
		title: "test",
		price: 1,
		category: { title: "test" },
		image: "test",
	};
	act(() => result.current.addProducts(_product));
	expect(result.current.productsIdOrder.length).toEqual(1);

	act(() => result.current.changeProductQuantity(_product.id, 5));
	expect(result.current.products[_product.id].quantity).toEqual(5);
});

test("item quantity cant be negative", async () => {
	const { result } = renderHook(() => useCartStore());
	const _product = {
		id: "1",
		title: "test",
		price: 1,
		category: { title: "test" },
		image: "test",
	};
	act(() => result.current.addProducts(_product));
	expect(result.current.productsIdOrder.length).toEqual(1);

	act(() => result.current.changeProductQuantity(_product.id, -1));
	expect(result.current.products[_product.id].quantity).toEqual(1);
});
