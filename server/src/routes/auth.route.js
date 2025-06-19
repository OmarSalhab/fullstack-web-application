const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const {
	registerUser,
	loginUser,
	refreshAccessToken,
	logout,
} = require("../controllers/auth.controller");

const {
	emailValidator,
	passwordValidator,
	nameValidator,
	validate,
} = require("../middlewares/validatorMiddleware");

const { protect } = require("../middlewares/authMiddleware");

//Guest Role Queries
//-------------------------------------------

// @route 	POST api/auth/register
// @desc 	POST new user
// @access  Public
router.post(
	"/register",
	nameValidator(),
	emailValidator(),
	passwordValidator(),
	validate,
	asyncHandler(registerUser)
);

// @route 	POST api/auth/login
// @desc 	POST signIn user { Response-Data: Access-Token, Refresh-Token, User-Document }
// @access  Public
router.post(
	"/login",
	emailValidator(),
	passwordValidator(),
	validate,
	asyncHandler(loginUser)
);

// @route 	GET api/auth/refresh
// @desc 	GET new Access-Token { Response-Data: Access-Token, User-Document }
// @access  Public
router.get("/refresh", asyncHandler(refreshAccessToken));

//User Role Queries
//-------------------------------------------

// @route 	POST api/auth/logout
// @desc 	POST logout user *Clear Refresh-Token From Cookies*
// @access  Private
router.post("/logout", protect, asyncHandler(logout));

module.exports = router;
