import Button from "./common/Button";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
const Card = ({ id, image, title, description, price, categorie }) => {
	const navigate = useNavigate();
	const viewDetails = () => {
		navigate("/product-info", { state: { id: id } });
	};

	return (
		<div
			className={clsx(
				"bg-primary shadow-md rounded-lg overflow-hidden",
				"transition-transform hover:scale-[1.02] duration-300",
				"flex m-4 flex-col md:flex-row lg:flex-col",
				"min-w-[300px] md:max-w-[95%] lg:max-w-[300px] md:max-h-[300px] lg:min-h-[500px]"
			)}
		>
			{/* Image Container */}
			<div
				className={clsx(
					"w-full",
					"md:w-1/2 lg:w-full",
					"h-[200px] md:h-full lg:h-[60%]"
				)}
			>
				<img src={image} alt={title} className="w-full h-full object-center" />
			</div>

			{/* Content Container */}
			<div
				className={clsx(
					"flex flex-col p-4",
					"md:w-1/2 lg:w-full",
					"justify-between gap-4"
				)}
			>
				{/* Product Info */}
				<div className="space-y-2">
					<h3
						className={clsx(
							"font-primary text-secondary font-semibold",
							"text-lg md:text-xl lg:text-lg"
						)}
					>
						{title}
					</h3>
					<div>{categorie}</div>
					<p
						className={clsx(
							"font-primary text-secondary/80",
							"text-sm md:text-base lg:text-sm",
							"line-clamp-2"
						)}
					>
						{description}
					</p>
					<span
						className={clsx(
							"font-primary text-secondary font-bold block",
							"text-lg md:text-xl lg:text-lg"
						)}
					>
						{price}
					</span>
				</div>

				{/* Buttons Container */}
				<div className={clsx("flex flex-col sm:flex-row gap-2", "mt-2")}>
					<Button
						variant="secondary"
						className="flex-1 text-sm md:text-base lg:text-sm"
					>
						Add to Cart
					</Button>
					<Button
						variant="primary"
						className="flex-1 text-sm md:text-base lg:text-sm"
						onClick={viewDetails}
					>
						View Details
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Card;
