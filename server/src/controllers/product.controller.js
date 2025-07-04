const User = require("../models/User");
const Product = require("../models/Product");

const productsQueryAll = async (req, res) => {
	const { category, minPrice, maxPrice, search } = req.query;
	const filter = {};

	if (category) filter.categorie = category;
	if (minPrice) filter.price = { ...filter.price, $gte: Number(minPrice) };
	if (maxPrice) filter.price = { ...filter.price, $lte: Number(maxPrice) };
	if (search) filter.title = { $regex: search, $options: "i" };

	const products = await Product.find(filter);
	res.json({ success: true, data: products });
};

const productQueryById = async (req, res) => {
	const userId = req.params.id;
	const product = await Product.findById(userId);
	res.json({ success: true, data: product });
};

const addOneToCart = async (req, res) => {
	const userId = req.user._id;
	const productId = req.params.id;
	const { quantity = 1 } = req.body;

	// This code to handle the async Error invalid ID;
	await Product.findById(productId);

	const user = await User.findById(userId);
	const cartItem = await user.cart.find(
		(item) => item.product.toString() === productId
	);

	if (cartItem) {
		cartItem.quantity += quantity;
	} else {
		user.cart.push({ product: productId, quantity });
	}

	await user.save();

	res
		.status(200)
		.json({ success: true, message: "Product added to cart", cart: user.cart });
};

const deleteOneFromCart = async (req, res) => {
	const userId = req.user._id;
	const productId = req.params.id;

	const user = await User.findById(userId);
	if (!user) {
		return res.status(404).json({ success: false, message: "User not found" });
	}

	const cartItem = user.cart.find(
		(item) => item.product.toString() === productId
	);

	if (!cartItem) {
		return res
			.status(404)
			.json({ success: false, message: "Product not found in cart" });
	}

	// Decrease quantity or remove item if quantity is 1
	if (cartItem.quantity > 1) {
		cartItem.quantity -= 1;
	} else {
		user.cart = user.cart.filter(
			(item) => item.product.toString() !== productId
		);
	}

	await user.save();

	res.status(200).json({
		success: true,
		message: "Product quantity updated in cart",
		cart: user.cart,
	});
};

const deleteOneFromWishlist = async (req, res) => {};

const addOneToWishlist = async (req, res) => {};

module.exports = {
	productsQueryAll,
	productQueryById,
	addOneToCart,
	addOneToWishlist,
	deleteOneFromCart,
	deleteOneFromWishlist,
};
