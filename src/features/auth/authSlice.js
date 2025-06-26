import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh } from "./authThunks";

const themes = {
	winter: "winter",
	dracula: "dracula",
};

const getThemeFromLocalStorage = () => {
	const theme = localStorage.getItem("theme") || themes.winter;
	document.documentElement.setAttribute("data-theme", theme);
	return theme;
};

const initialState = {
	user: null,
	accessToken: null,
	loading: false,
	error: null,
	theme: getThemeFromLocalStorage(),
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		toggleTheme: (state) => {
			const { dracula, winter } = themes;
			state.theme = state.theme === dracula ? winter : dracula;
			document.documentElement.setAttribute("data-theme", state.theme);
			localStorage.setItem("theme", state.theme);
		},
	},
	extraReducers: (builder) => {
		//login thunk
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
		//refresh thunk
		builder
			.addCase(refresh.pending, (state) => {
				state.loading = true;
			})
			.addCase(refresh.fulfilled, (state, action) => {
				state.accessToken = action.payload.accessToken;
				state.user = action.payload.user;
				state.loading = false;
				state.error = null;
			})
			.addCase(refresh.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
		//logout thunk
		builder
			.addCase(logout.pending, (state) => {
				state.loading = true;
			})
			.addCase(logout.fulfilled, () => initialState)
			.addCase(logout.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});
export const {toggleTheme} = authSlice.actions;
export default authSlice.reducer;
