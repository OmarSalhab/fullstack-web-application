import { useDispatch } from "react-redux";
import { login, logout } from "../features/auth/authThunks";
const Login = () => {
	const dispatch = useDispatch();
	const handleLogin = async () => {
		dispatch(login({ email: "test@gmail.com", password: "123456" }));
	};
	const handleLogout = async () => {
		dispatch(logout());
	};
	return (
		<div className="flex flex-col gap-2">
			<button onClick={handleLogin}>login</button>
			<button onClick={handleLogout}>logout</button>
		</div>
	);
};

export default Login;
