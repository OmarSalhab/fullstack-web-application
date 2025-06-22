const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./src/config/db");

const dotenv = require("dotenv");
dotenv.config({ path: ".\\src\\config\\.env" });

const PORT = process.env.PORT || 9000;
const corsConfig ={credentials:true, origin:"http://localhost:5173"};

const app = express();

app.use(cors(corsConfig));
app.use(express.json());
app.use(require('cookie-parser')());

app.use("/api/products", require("./src/routes/product.route.js"));
app.use("/api/auth", require("./src/routes/auth.route.js"));
app.use("/api/user", require("./src/routes/user.route.js"));

app.use(require('./src/middlewares/errorMiddleware.js'));

app.listen(PORT, async () => {
	try {
		await dbConnect();
	} catch (error) {
		console.log(error.message);
	}
	console.log(`Server is running on http://localhost:${PORT}`);
});
