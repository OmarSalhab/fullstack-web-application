import { createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/apiClient";
import { toast } from "react-toastify";

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
