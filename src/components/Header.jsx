import { Link } from "react-router-dom";
import useWindow from "../hooks/useWindow";
import SearchBar from "./common/SearchBar";
import Button from "./common/Button";

const Header = () => {
	const isMobile = useWindow();
	if (isMobile) {
		return <div>heef</div>;
	}
	return (
		<header className="w-full font-primary">
			<div className="min-h-10 bg-secondary" />
			<nav className="flex justify-around items-center py-6 text-secondary shadow-md">
				<div className="font-bold">Logo</div>
				<div className="flex justify-between w-[27%] text-xl">
					<div>Products</div>
					<div>Home</div>
					<div>Cart</div>
				</div>

				<Button>SignIn</Button>
			</nav>
		</header>
	);
};
export default Header;
