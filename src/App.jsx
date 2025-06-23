import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import DataRouting from "./routes";
import customFetch, { publicEndpoints } from "./utils/apiClient";
import { refresh } from "./features/auth/authThunks";

const App = () => {
	const token = useSelector((state) => state.authState.accessToken);
	const dispatch = useDispatch();

	// Axios request interceptor
	useEffect(() => {
		const authInterceptor = customFetch.interceptors.request.use((config) => {
			const isPublicEndpoint = publicEndpoints.some((endpoint) =>
				config.url.includes(endpoint)
			);

			if (!isPublicEndpoint) {
				config.headers.Authorization =
					!config._retry && token
						? `Bearer ${token}`
						: config.headers.Authorization;
			}
			return config;
		});
		return () => {
			customFetch.interceptors.request.eject(authInterceptor);
		};
	}, [token]);

	// Axios response interceptor
	useEffect(() => {
		const refreshInterceptor = customFetch.interceptors.response.use(
			(response) => response,
			async (error) => {
				const originalRequest = error.config;

				if (
					error.response.status === 401 &&
					error.response.data.message === "Not authorized"
				) {
					try {
						const response = await dispatch(refresh()).unwrap();

						originalRequest.headers.Authorization = `Bearer ${response.accessToken}`;
						originalRequest._retry = true;

						return customFetch(originalRequest);
					} catch {
						return null;
					}
				}

				return Promise.reject(error);
			}
		);

		return () => {
			customFetch.interceptors.response.eject(refreshInterceptor);
		};
	}, [dispatch]);

	return <DataRouting />;
};

export default App;
