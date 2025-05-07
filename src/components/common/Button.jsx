import clsx from "clsx";

const Button = ({
	children,
	onClick,
	type = "button",
	variant = "primary",
	className,
}) => {
	return (
		<button
			className={clsx(
				"px-4 py-2 font-primary font-medium transition-colors border ",
				{
					"bg-primary text-secondary rounded-sm hover:text-primary hover:bg-secondary":
						variant === "primary",
					"bg-primary text-secondary hover:text-primary hover:bg-secondary rounded-[50px]":
						variant === "secondary",
				},
				className
			)}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
};

export default Button;
