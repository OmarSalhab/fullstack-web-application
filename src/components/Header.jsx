import { Link } from "react-router-dom";
import { useState } from "react";
import useWindow from "../hooks/useWindow";
import Button from "./common/Button";
import clsx from "clsx";
const Header = () => {
	const isMobile = useWindow();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleSignIn = () => {};
	const handleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	if (isMobile) {
		return (
			<>
				<header className="fixed top-0 z-20 w-full ">
					<div className="w-full font-primary bg-primary bg-opacity-95">
						<div className="h-10 bg-secondary" />
						<nav className="flex justify-between px-6 items-center py-4 text-secondary shadow-md">
							<Link to="/" className="font-bold text-2xl">
								#
							</Link>
							<div className="flex gap-4 items-center">
								<Button variant="secondary" onClick={handleSignIn}>
									SignIn
								</Button>
								<button
									className="text-3xl transition-transform"
									onClick={handleMenu}
								>
									{isMenuOpen ? "×" : "☰"}
								</button>
							</div>
						</nav>
					</div>
				</header>

				{isMenuOpen && (
					<div
						className="fixed inset-0 bg-black bg-opacity-50 z-[5]"
						onClick={handleMenu}
					/>
				)}

				{/* Mobile Menu */}
				<aside
					className={clsx(
						"fixed font-primary text-2xl w-full min-h-[40%] bottom-0 z-20 bg-secondary",
						"flex flex-col justify-around items-center text-primary",
						"transform transition-transform duration-300 ease-in-out",
						isMenuOpen ? "translate-y-0" : "translate-y-full"
					)}
				>
					{["home", "products", "cart"].map((item) => (
						<div
							key={item}
							className="w-full text-center py-4 hover:bg-primary hover:text-textSecondary transition-colors"
						>
							<Link to={`/${item}`} onClick={handleMenu}>
								{item.charAt(0).toUpperCase() + item.slice(1)}
							</Link>
						</div>
					))}
				</aside>
			</>
		);
	}

	return (
		<header className="fixed top-0 z-20 w-full font-primary ">
			<div className="min-h-10 bg-secondary" />
			<nav className="flex justify-around items-center py-6 text-secondary shadow-md bg-primary bg-opacity-95">
				<div className="font-bold">#</div>
				<div className="flex justify-between lg:w-[27%] w-[40%] text-xl">
					{["products", "home", "cart"].map((item) => (
						<div
							key={item}
							className="w-full text-center  hover:text-textSecondary transition-colors"
						>
							<Link to={`/${item}`} onClick={handleMenu}>
								{item.charAt(0).toUpperCase() + item.slice(1)}
							</Link>
						</div>
					))}
				</div>

				<Button onClick={handleSignIn}>SignIn</Button>
			</nav>
		</header>
	);
};
export default Header;
