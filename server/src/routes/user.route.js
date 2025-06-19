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

const { protect, isAuthorizedAdmin } = require("../middlewares/authMiddleware");

//User Role Queries
router.get("/:id/profile", protect, asyncHandler(getUserById));
router.get("/:id/name", protect, asyncHandler(getUserName));

router.put(
	"/:id/profile",
	nameValidator(),
	emailValidator(),
	passwordValidator(),
	protect,
	asyncHandler(updateUserInfo)
);

//Admin Role Queries
router.get("/", protect, isAuthorizedAdmin, asyncHandler(getAllUsers));

router.put(
	"/:id/admin",
	protect,
	isAuthorizedAdmin,
	asyncHandler(updateUserInfo)
);
// router.put("/:id/admin",protect, isAuthorizedAdmin, asyncHandler(updateUserInfo));

router.delete("/:id", protect, isAuthorizedAdmin, asyncHandler(deleteUser));

module.exports = router;
