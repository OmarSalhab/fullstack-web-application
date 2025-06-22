import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
	authState: null,
	cartState: cartReducer,
});

export default store;