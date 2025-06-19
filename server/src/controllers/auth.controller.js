const User = require("../models/User");
const {
	generateAccess,
	generateRefresh,
} = require("../middlewares/authMiddleware");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password)
		return res
			.status(401)
			.json({ success: false, message: "Body request are missing" });

	const newUser = new User({ name, email, password, role: "user" });
	await newUser.save();

	res.status(200).json({ success: true, message: "Succsesfully Created" });
};

const loginUser = async (req, res) => {
	const { email, password } = req.body;
	const passwordDocument = await User.findOne({ email: email }).select(
		"password"
	);
	if (!passwordDocument) {
		const err = new Error("User not found, Faild to login");
		err.statusCode = 404;
		throw err;
	}
	const isMatch = await bcrypt.compare(password, passwordDocument.password);
	if (!isMatch) {
		{
			const err = new Error("Invalid Password");
			err.statusCode = 401;
			throw err;
		}
	}

	const user = await User.findById(passwordDocument._id).select("-password");

	const refreshToken = generateRefresh(user);

	res.cookie("refreshToken", refreshToken, {
		httpOnly: true,
		sameSite: "None",
		secure: true,
		maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
	});

	const accessToken = generateAccess(user._id);

	res.json({
		success: true,
		accessToken,
		user,
	});
};

const refreshAccessToken = (req, res) => {
	const { refreshToken } = req.cookies;
	console.log(refreshToken);

	if (!refreshToken) return res.status(401).json({ msg: "No refresh token" });

	const jwt = require("jsonwebtoken");
	const dotenv = require("dotenv");
	dotenv.config({ path: "..\\config\\.env" });

	jwt.verify(refreshToken, process.env.JWT_REFRESH, async (err, userJwt) => {
		if (err) return res.status(403).json({ msg: "Invalid refresh token" });

		const user = await User.findById(userJwt.id).select("-password");

		const accessToken = generateAccess(userJwt.id);

		res.json({ success: true, accessToken, user });
	});
};

const logout = async (req, res) => {};

module.exports = { registerUser, loginUser, refreshAccessToken, logout };
