import axios from "axios";

const customFetch = axios.create({
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});

export default customFetch;
