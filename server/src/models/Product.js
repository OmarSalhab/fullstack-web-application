const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		company: { type: String, required: true },
		description: { type: String, required: true },
		featured: { type: Boolean, default: false },
		publishedAt: { type: Date },
		category: { type: String, required: true },
		image: { type: String, required: true },
		price: { type: Number, required: true }, // store as Number, not String
		shipping: { type: Boolean, default: false },
		colors: [{ type: String, required: true }],
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
