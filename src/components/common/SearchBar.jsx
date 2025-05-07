import clsx from "clsx";

const SearchBar = ({ onChange, value, className, variant = "primary" }) => {
	return (
		<div className="relative w-full max-w-md">
			<input
				type="text"
				value={value}
				onChange={onChange}
				placeholder={"Search products..."}
				className={clsx(
					"w-full px-4 py-2 pl-5 font-primary font-medium transition-colors border",
					{
						"bg-primary text-secondary rounded-[50px] focus:outline-none  focus:ring-secondary":
							variant === "primary",
					},
					className
				)}
			/>
			<span className="absolute right-5 top-1/2 -translate-y-1/2 text-secondary text-xl">
				⚲
			</span>
		</div>
	);
};

export default SearchBar;
