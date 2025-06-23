import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import customFetch from "../../utils/apiClient";

export const login = createAsyncThunk(
	"auth/login",
	async (data, { rejectWithValue }) => {
		try {
			const response = await customFetch.post("auth/login", data);
			return response.data;
		} catch (error) {
			const msg =
				error?.response?.data?.errors?.[0]?.msg ||
				error?.response?.data?.message ||
				"An unexpected error occurred. Please try again.";
			toast.error(msg);
			return rejectWithValue(msg);
		}
	}
);

export const refresh = createAsyncThunk(
	"auth/refresh",
	async (_, { rejectWithValue }) => {
		try {
			const response = await customFetch.get("auth/refresh");
			return response.data;
		} catch (error) {
			const msg =
				error?.response?.data?.message ||
				"An unexpected error occurred. Please try again.";
			return rejectWithValue(msg);
		}
	}
);

export const logout = createAsyncThunk(
	"auth/logout",
	async (_, { rejectWithValue }) => {
		try {
			const response = await customFetch.post("auth/logout");
			console.log(response);
			
			return response.data;
		} catch (error) {
			console.log(error);
			const msg =
				error?.response?.data?.message ||
				"An unexpected error occurred. Please try again.";
			toast.error(msg);
			return rejectWithValue(msg);
		}
	}
);
