import axios from "axios";

export const publicEndpoints = [
	"auth/login",
	"auth/register",
	"auth/refresh",
];

const customFetch = axios.create({
    baseURL:"http://localhost:9000/api/",
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});

export default customFetch;
