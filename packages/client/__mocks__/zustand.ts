/* eslint-disable */
import actualCreate from "zustand";
import { act } from "react-dom/test-utils";

const storeResetFns = new Set();

const create = (createState: any) => {
	const store = actualCreate(createState);
	const initialState = store.getState();
	storeResetFns.add(() => store.setState(initialState, true));
	return store;
};

// Reset all stores after each test run
afterEach(() => {
	act(() => storeResetFns.forEach((resetFn: any) => resetFn()));
});

export default create;
