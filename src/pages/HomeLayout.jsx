import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/NavBar";
import { Footer, Header } from "../components";
import { Loading } from "../components";

const HomeLayout = () => {
	const navigation = useNavigation();
	const isPageLoading = navigation.state === "loading";
	return (
		<div className="min-h-screen grid grid-rows-[auto_auto_1fr_auto]">
			<Header />
			<Navbar />
			{isPageLoading ? (
				<Loading />
			) : (
				<main className="align-element py-20">
					<Outlet />
				</main>
			)}
			<Footer />
		</div>
	);
};

export default HomeLayout;
