const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const {
	getUserById,
	getAllUsers,
	getUserName,
	updateUserInfo,
	deleteUser,
} = require("../controllers/user.controller");

const {
	emailValidator,
	passwordValidator,
	nameValidator,
} = require("../middlewares/validatorMiddleware");


//User Role Queries
//-------------------------------------------
const { protect, isAuthorizedAdmin } = require("../middlewares/authMiddleware");

// @route    PUT api/user/me
// @desc     Update user information
// @access   Private
router.put(
	"/me",
	nameValidator(),
	emailValidator(),
	passwordValidator(),
	protect,
	asyncHandler(updateUserInfo)
);

//Admin Role Queries
//-------------------------------------------

// @route    GET api/user
// @desc     Get all user
// @access   Private
router.get("/", protect, isAuthorizedAdmin, asyncHandler(getAllUsers));

// @route    DELETE api/user
// @desc     Delete one user
// @access   Private
router.delete("/:id", protect, isAuthorizedAdmin, asyncHandler(deleteUser));

module.exports = router;
