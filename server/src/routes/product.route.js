const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { protect } = require("../middlewares/authMiddleware");
const {
	productsQueryAll,
	productQueryById,
	addToCart,
	addToWishlist,
	deleteCartProdut,
	deleteWishListProdut,
} = require("../controllers/product.controller");

//Guest Role Queries
//-------------------------------------------

// @route    GET api/products
// @desc     Get all products
// @access   Public
router.get("/", asyncHandler(productsQueryAll));

// @route 	GET api/products/:id
// @desc 	GET product by ID
// @access  Public
router.get("/:id", asyncHandler(productQueryById));

//User Role Queries
//-------------------------------------------

router.post("/cart/:id", protect, asyncHandler(addToCart));

router.post("/wishlist/:id", protect, asyncHandler(addToWishlist));

router.delete("/cart/:id", protect, asyncHandler(deleteCartProdut));

router.delete("/wishlist/:id", protect, asyncHandler(deleteWishListProdut));

module.exports = router;
