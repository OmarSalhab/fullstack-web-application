import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./index.css";
import App from "./App.jsx";
import store from "./store";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<>
				<App />
				<ToastContainer position="bottom-right" />
			</>
		</Provider>
	</StrictMode>
);
