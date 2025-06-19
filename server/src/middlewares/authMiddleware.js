const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config({ path: "..\\config\\.env" });
const asyncHandler = require("express-async-handler");

const generateAccess = (userId) => {
	return jwt.sign({ id: userId }, process.env.JWT_ACCESS, { expiresIn: "15m" });
};

const generateRefresh = (userId) => {
	return jwt.sign({ id: userId }, process.env.JWT_REFRESH, { expiresIn: "7d" });
};

const protect = async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer ")
	) {
		token = req.headers.authorization.split(" ")[1];
	}
	if (!token) {
		return res
			.status(401)
			.json({ success: false, message: "Not authorized, no token" });
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = await User.findById(decoded.id).select("-password");
		next();
	} catch (error) {
		return res
			.status(401)
			.json({ success: false, message: "Not authorized, token failed" });
	}
};

const isAuthorizedAdmin = asyncHandler(async (req, res, next) => {
	const role = req.user.role;
	if (role === "user") {
		const err = new Error("User Not Authorized");
		err.status = 401;
		throw err;
	} else if (role === "admin") {
		next();
	}
});

module.exports = { generateAccess,generateRefresh, protect, isAuthorizedAdmin };
