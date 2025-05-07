import CartPage from "../containers/CartPage";
import HomePage from "../containers/HomePage";
import CheckOutPage from "../containers/CheckOutPage";
import ProductInfoPage from "../containers/ProductInfoPage";
import ProductsListPage from "../containers/ProductsListPage";
import NotFoundPage from "../containers/NotFoundPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const ReactComponent = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" index={true} element={<HomePage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/products" element={<ProductsListPage />} />
				<Route path="/product-info" element={<ProductInfoPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/checkout" element={<CheckOutPage />} />
				<Route path="/*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default ReactComponent;
