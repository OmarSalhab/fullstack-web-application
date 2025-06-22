import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authThunks";


const initialState = {
	user: null,
	accessToken: null,
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialState,
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.accessToken = action.payload.accessToken;
				state.user = action.payload.user;
				state.loading = false;
				state.error = null;
			})
			.addCase(login.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
