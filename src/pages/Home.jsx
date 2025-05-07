import homeData from "../assets/data/homeData";
import Button from "../components/common/Button";
import SearchBar from "../components/common/SearchBar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
	return (
		<>
			<Header />
			<div className="w-full relative">
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
							Welcome to Our Store
						</h1>
						<p className="text-primary sm:text-lg">{homeData.heroParagraph}</p>
						<SearchBar />
						<Button variant="secondary" className="mt-4">
							Explore Now
						</Button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
