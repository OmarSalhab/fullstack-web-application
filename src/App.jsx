import "./App.css";
import DataRouting from "./routes";

import { Provider } from "react-redux";
import store from "./store";

function App() {
	return <Provider store={store} children={<DataRouting />} />;
}

export default App;
