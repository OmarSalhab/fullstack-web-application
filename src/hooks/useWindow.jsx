import { useState, useEffect } from "react";
const useWindow = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 630);

	useEffect(() => {
		const handleWindow = () => {
			setIsMobile(window.innerWidth <= 630);
		};
		
		window.addEventListener("resize", handleWindow);
		return () => window.removeEventListener("resize", handleWindow);
	}, []);

	return isMobile;
};

export default useWindow;