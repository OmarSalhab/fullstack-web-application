import data from "./assets/data";
import Button from "./components/common/Button";

import SearchBar from "./components/common/SearchBar";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<div className="flex flex-col  gap-6 p-6 min-h-dvh justify-center items-center">
				<h1 className="h1">my name is omar</h1>
				<h2 className="h2">my name is omar</h2>
				<h3 className="h3">my name is omar</h3>
				<h4 className="h4">my name is omar</h4>
				<h5 className="h5">my name is omar</h5>
				<h6 className="h6">my name is omar</h6>
				<div className="text-center">{data.heroParagraph}</div>
				<Button variant="secondary">Product Info</Button>
				<Button variant="primary">Login</Button>

				<SearchBar />
			</div>
			<Footer isMobile={true} />
		</>
	);
}

export default App;
