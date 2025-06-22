import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
	cartItems: [],
	numItemsInCart: 0,
	cartTotalPrice: null,
	shipping: 500,
	tax: 0,
    orderTotal:0
};

const getCartFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("cartList")) || defaultState;
};

const cartSlice = createSlice({
	name: "cart",
	initialState: getCartFromLocalStorage(),
	reducers: {},
    
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
