import store from "../store";
import {
	createBrowserRouter,
	RouterProvider,
	redirect,
} from "react-router-dom";

//PAGES ROUTES
import {
	HomeLayout,
	Landing,
	About,
	Products,
	SingleProduct,
	Cart,
	Checkout,
	Orders,
	Login,
	Register,
	Error,
} from "../pages";

import { ErrorElement } from "../components";

//LOADERS

//ACTIONS

const protectRoute = (store) => {
	return () => {
		const state = store.getState();
		const user = state.user;
		if (!user || !state.token) {
			return redirect("/login");
		}
		return null; // allow access
	};
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		loader: undefined,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <ErrorElement />,
				loader: undefined,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "products",
				element: <Products />,
				errorElement: <ErrorElement />,
				loader: undefined,
			},
			{
				path: "products/:id",
				element: <SingleProduct />,
				errorElement: <ErrorElement />,
				loader: undefined,
			},
			{
				path: "cart",
				element: <Cart />,
				loader: undefined,
			},
			{
				path: "checkout",
				element: <Checkout />,
				loader: async (args) => {
					protectRoute(store);
				},
				action: undefined,
			},
			{
				path: "orders",
				element: <Orders />,
				loader: async (args) => {
					protectRoute(store);
				},
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <Error />,
		action: undefined,
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <Error />,
		action: undefined,
	},
]);

const DataRouting = () => {
	return <RouterProvider router={router} />;
};

export default DataRouting;
