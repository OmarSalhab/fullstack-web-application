import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductsList = () => {
	return (
		<>
			<Header />
			<div className="mt-[150px] w-full flex flex-col sm:flex-row flex-wrap gap-1">
				<Card
					image="src\assets\images\photo-1621972660295-0ae270b0b38e.avif"
					title="Product Name"
					description="Product description goes here..."
					price="$99.99"
				/>
				<Card
					image="src\assets\images\photo-1621972660295-0ae270b0b38e.avif"
					title="Product Name"
					description="Product description goes here..."
					price="$99.99"
				/>
				<Card
					image="src\assets\images\photo-1621972660295-0ae270b0b38e.avif"
					title="Product Name"
					description="Product description goes here..."
					price="$99.99"
				/>
				<Card
					image="src\assets\images\photo-1621972660295-0ae270b0b38e.avif"
					title="Product Name"
					description="Product description goes here..."
					price="$99.99"
				/>
				<Card
					image="src\assets\images\photo-1593030942428-a5451dca4b42.avif"
					title="Product Name"
					description="Product description goes here..."
					price="$99.99"
				/>
				<Card
					image="src\assets\images\photo-1593030942428-a5451dca4b42.avif"
					title="Product Name"
					description="Product description goes here..."
					price="$99.99"
				/>
				<Card
					image="src\assets\images\photo-1593030942428-a5451dca4b42.avif"
					title="Product Name"
					description="Product description goes here..."
					price="$99.99"
				/>
				<Card
					image="src\assets\images\photo-1593030942428-a5451dca4b42.avif"
					title="Product Name"
					description="Product description goes here..."
					price="$99.99"
				/>
			</div>{" "}
			;
			<Footer />
		</>
	);
};

export default ProductsList;
