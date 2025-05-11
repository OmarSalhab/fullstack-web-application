import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
const ProductInfo = () => {
	const location = useLocation();
	const [product, setProduct] = useState(null);
	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const res = await fetch(`endpoint=${location.state.id}`);
				const data = res.json();
				if (!data) throw new Error(`Error no data Found`);
				setProduct(data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchProduct();
	}, [location.state.id]);

	return (
		<>
			<Header />
			<div className="mt-52 w-full h-screen flex justify-center items-center">
				{product}
			</div>
			<Footer />
		</>
	);
};

export default ProductInfo;
