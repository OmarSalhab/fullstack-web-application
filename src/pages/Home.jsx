import homeData from "../assets/data/homeData";
import Button from "../components/common/Button";
import SearchBar from "../components/common/SearchBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
const Home = () => {
	const { ref: heroRef, inView: heroInView } = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	const { ref: trendingRef, inView: trendingInView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	const { ref: cataRef, inView: cataInView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	const { ref: valuePropsRef, inView: valuePropsInView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	const { ref: testimonialRef, inView: testimonialInView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	  });
	return (
		<>
			<Header />
			<main>
				<section
					ref={heroRef}
					className={clsx(
						"w-full relative duration-700 transition-all transform font-primary",
						heroInView
							? "opacity-100 -translate-y-0"
							: "opacity-0 -translate-y-2/4"
					)}
				>
					{/* Grid Background */}
					<div className="grid grid-cols-4 grid-rows-3 gap-1 p-4 w-full h-screen mt-32">
						<div className="bg-[url('/src/assets/images/heroGrid/photo-1494028698538-2cd52a400b17.avif')] bg-cover bg-center col-span-2 row-span-2 rounded-md" />
						<div className="bg-[url('/src/assets/images/heroGrid/photo-1603583784692-a579c6412648.avif')] bg-cover bg-center rounded-md" />
						<div className="bg-[url('/src/assets/images/heroGrid/photo-1485518882345-15568b007407.avif')] bg-cover bg-center rounded-md" />
						<div className="bg-[url('/src/assets/images/heroGrid/photo-1495264537403-93658651aaea.avif')] bg-cover bg-center rounded-md" />
						<div className="bg-[url('/src/assets/images/heroGrid/photo-1646855672493-b6925d356c9e.avif')] bg-cover bg-center rounded-md" />
						<div className="bg-[url('/src/assets/images/heroGrid/photo-1592853149896-06df1df9efff.avif')] bg-cover bg-center col-span-4 rounded-md" />
					</div>

					{/* Content Overlay */}
					<div className="absolute w-full z-10 flex flex-col items-center justify-center min-h-dvh p-6 inset-0 ">
						<div className="text-center max-w-[600px] gap-4 flex flex-col justify-center items-center">
							<h1 className="text-primary sm:text-5xl font-bold ">
								{homeData.hero.title}
							</h1>
							<p className="text-primary sm:text-lg">
								{homeData.hero.subtitle}
							</p>
							<SearchBar placeholder={homeData.hero.searchPlaceholder} />
							<Button variant="filled" className="mt-4">
								Explore Now
							</Button>
						</div>
					</div>
				</section>

				{/* Product Slider Section */}
				<section
					ref={trendingRef}
					className={clsx(
						"w-full py-16 px-4 transform transition-all duration-700 font-primary mb-5",
						trendingInView
							? "opacity-100 translate-x-0 "
							: "opacity-0 -translate-x-48 "
					)}
				>
					<div className="max-w-full mx-auto">
						<h2 className="h1  text-center mb-4">{homeData.trending.title}</h2>
						<h3 className="h2 text-center mb-16">
							{homeData.trending.subtitle}
						</h3>

						{/* Slider Container */}
						<div className="w-full overflow-x-auto ">
							<div className="flex gap-4 pb-4 snap-x snap-mandatory">
								{/* Product Cards */}
								{homeData.trending.products.map((item, idx) => (
									<div
										key={idx}
										className={clsx(
											"min-w-[280px] sm:min-w-[320px]",
											"snap-start shrink-0",
											"bg-white rounded-lg shadow-md",
											"transition-transform hover:scale-[1.02]"
										)}
									>
										<img src={item.image} className=" h-[300px] rounded-t-lg" />

										<div className="p-4">
											<h3 className="text-secondary font-semibold text-lg mb-2">
												{item.name}
											</h3>
											<span className="text-secondary font-bold">
												{item.price}
											</span>
											<p className="text-gray-600 text-sm mb-3 w-[250px]">
												{item.description.split("", 60).join("") + "..."}
											</p>
											<div className="flex items-center justify-between">
												<Button variant="secondary" className="text-sm">
													{item.quickView}
												</Button>
												<Button variant="secondary" className="text-sm">
													{item.addToCart}
												</Button>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
				{/* Catagories Section */}
				<section>
					<div
						ref={cataRef}
						className={clsx(
							"max-w-7xl mx-auto transition-all transfom duration-700  font-primary mb-10",
							cataInView
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-48"
						)}
					>
						<h2 className="h2 text-center mb-16">
							{homeData.categories.title}
						</h2>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{homeData.categories.items.map((category, idx) => (
								<div
									key={idx}
									className="group relative h-[400px] overflow-hidden rounded-lg cursor-pointer"
								>
									{/* Background Image */}
									<div
										className={clsx(
											"absolute inset-0 bg-cover bg-center transition-transform duration-500",
											"group-hover:scale-110",
											{
												"bg-[url('/src/assets/images/photo-1593030942428-a5451dca4b42.avif')]":
													idx === 0,
												"bg-[url('/src/assets/images/photo-1592878940526-0214b0f374f6.avif')]":
													idx === 1,
												"bg-[url('/src/assets/images/photo-1592878904946-b3cd8ae243d0.avif')]":
													idx === 2,
												"bg-[url('/src/assets/images/photo-1592878849122-facb97520f9e.avif')]":
													idx === 3,
											}
										)}
									/>

									{/* Overlay */}
									<div className="absolute inset-0 bg-secondary bg-opacity-20 transition-opacity duration-500 group-hover:bg-opacity-40" />

									{/* Content */}
									<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
										<h3 className="text-primary font-secondary text-2xl mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
											{category.name}
										</h3>
										<Button
											variant="filled"
											className="opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
										>
											{category.cta}
										</Button>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Value Props Section */}
				<section
					ref={valuePropsRef}
					className={clsx(
						"w-full py-16 px-4 bg-primary transform transition-all duration-700 ",
						valuePropsInView
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					)}
				>
					<h2 className="font-primary text-center mb-16">What Make Us Different</h2>
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{homeData.valueProps.map((prop, idx) => (
								<div
									key={idx}
									className="flex flex-col items-center text-center p-6  rounded-lg hover:bg-secondary/10 transition-colors duration-300"
								>
									{/* Icon placeholder - replace with your icons */}
									<div className="w-16 h-16 mb-4 flex items-center justify-center text-secondary">
										{prop.icon === "fabric" && "🧶"}
										{prop.icon === "alterations" && "✂️"}
										{prop.icon === "shipping" && "🚚"}
										{prop.icon === "returns" && "↩️"}
									</div>

									<h3 className="font-primary text-secondary text-xl font-semibold mb-2">
										{prop.title}
									</h3>

									<p className="text-secondary/80 font-primary">{prop.text}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section
					ref={testimonialRef}
					className={clsx(
						"w-full py-24 px-4 bg-primary transform transition-all duration-700 -mt-8",
						testimonialInView
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10"
					)}
				>
					<div className="max-w-7xl mx-auto">
						<h2 className="text-secondary text-4xl font-primary font-bold text-center mb-16">
							{homeData.testimonials.title}
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{homeData.testimonials.items.map((item, idx) => (
								<div
									key={idx}
									className={clsx(
										" border rounded-2xl p-8",
										"transform transition-all duration-500 hover:scale-105",
										"flex flex-col items-center text-center",
										"group cursor-pointer"
									)}
								>
									{/* Image */}
									<div
										className="w-24 h-24 rounded-full overflow-hidden mb-6 
            ring-4 ring-secondary/20 group-hover:ring-secondary/40 transition-all duration-500"
									>
										<img
											src={item.image}
											alt={item.author}
											className="w-full h-full object-cover"
										/>
									</div>

									{/* Quote */}
									<p className="text-secondary/80 font-primary text-lg mb-6 italic">
										"{item.quote}"
									</p>

									{/* Rating */}
									<div className="flex gap-1 mb-4">
										{[...Array(item.rating)].map((_, i) => (
											<span key={i} className="text-secondary">
												★
											</span>
										))}
									</div>

									{/* Author */}
									<div className="mt-auto">
										<h3 className="text-secondary font-primary font-semibold text-lg">
											{item.author}
										</h3>
										<p className="text-secondary/60 font-primary text-sm">
											{item.role}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Home;
