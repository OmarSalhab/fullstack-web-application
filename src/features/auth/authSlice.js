import { createSlice } from "@reduxjs/toolkit";

import customFetch from "../../utils/apiClient";

//login
//logout
//register
//refresh

const defaultState = {
    user:null,
    token:null,
}

const authSlice = createSlice({
	name: "auth",
	initialState: null,
	reducers: {
		loginUser: (state, action) => {},
		refreshUser: (state, action) => {},
		logoutUser: (state) => {
            
        },
	},
	extraReducers: {},
});

export const { loginUser, refreshUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
