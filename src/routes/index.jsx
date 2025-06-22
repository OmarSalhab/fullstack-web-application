import { useLayoutEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import customFetch from "../utils/apiClient";

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
	NotFound,
} from "../pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <Landing />,
				loader: null,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "products",
				element: <Products />,
				loader: null,
			},
			{
				path: "products/:id",
				element: <SingleProduct />,
				loader: null,
			},
			{
				path: "cart",
				element: <Cart />,
				loader: null,
			},
			{
				path: "checkout",
				element: <Checkout />,
			},
			{
				path: "orders",
				element: <Orders />,
				loader: null,
			},
		],
		loader:
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

const DataRouting = () => {

	useLayoutEffect(()=>{

	},[]);

	useLayoutEffect(()=>{

	},[]);
	return <RouterProvider router={router} />;
};

export default DataRouting;
