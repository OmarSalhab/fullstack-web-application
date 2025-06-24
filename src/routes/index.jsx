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
	NotFound,
} from "../pages";

//LOADERS

//ACTIONS

const protectedLoader = (store) => {
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
		children: [
			{
				index: true,
				element: <Landing />,
				loader: undefined,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "products",
				element: <Products />,
				loader: undefined,
			},
			{
				path: "products/:id",
				element: <SingleProduct />,
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
					protectedLoader(store);
				},
				action: undefined,
			},
			{
				path: "orders",
				element: <Orders />,
				loader: async (args) => {
					protectedLoader(store);
				},
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
		action: undefined,
	},
	{
		path: "/register",
		element: <Register />,
		action: undefined,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

const DataRouting = () => {
	return <RouterProvider router={router} />;
};

export default DataRouting;
