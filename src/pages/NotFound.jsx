import Footer from "../components/Footer";
import Header from "../components/Header";

const NotFound = () => {
	return (
		<>
			<Header />
			<div className="flex min-h-svh min-w-full justify-center items-center bg-primary text-secondary font-primary font-normal text-3xl">
				ERROR 404: Sorry The Page <br />
				Has Not Been Found :{"("}
			</div>
			<Footer />
		</>
	);
};

export default NotFound;
