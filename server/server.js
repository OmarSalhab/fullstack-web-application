const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { dbConnect } = require("./src/config/db");
const globalAsyncErrorHandler = require('./src/middlewares/errorMiddleware.js')

dotenv.config({ path: ".\\src\\config\\.env" });
const PORT = process.env.PORT || 9000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(require('cookie-parser')());

app.use("/api/products", require("./src/routes/product.route.js"));
app.use("/api/Auth", require("./src/routes/auth.route.js"));
app.use("/api/user", require("./src/routes/user.route.js"));

app.use(globalAsyncErrorHandler);

app.listen(PORT, async () => {
	try {
		await dbConnect();
	} catch (error) {
		console.log(error.message);
	}
	console.log(`Server is running on localhost:${PORT}`);
});
