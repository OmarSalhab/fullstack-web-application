const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const {
	productsQueryAll,
	productQueryById,
	addOneToCart,
	addOneToWishlist,
	deleteOneFromCart,
	deleteOneFromWishlist,
} = require("../controllers/product.controller");

//Guest Role Queries
//-------------------------------------------

// @route    GET api/products
// @desc     Get all products
// @access   Public
router.get("/", asyncHandler(productsQueryAll));

// @route 	GET api/products/:id
// @desc 	Get product by ID
// @access  Public
router.get("/:id", asyncHandler(productQueryById));



//User Role Queries
//-------------------------------------------
const { protect } = require("../middlewares/authMiddleware");

// @route 	POST api/products/:id
// @desc 	Post one product to cartlist
// @access  Private
router.post("/:id", protect, asyncHandler(addOneToCart));

// @route 	POST api/products/wishlist/:id
// @desc 	Post one product to wishlist
// @access  Private
router.post("/wishlist/:id", protect, asyncHandler(addOneToWishlist));

// @route 	DELETE api/products/:id
// @desc 	Delete one product from cartlist
// @access  Private
router.delete("/:id", protect, asyncHandler(deleteOneFromCart));

// @route 	DELETE api/products/wishlist/:id
// @desc 	Delete one product from wishlist
// @access  Private
router.delete("/wishlist/:id", protect, asyncHandler(deleteOneFromWishlist));

module.exports = router;
