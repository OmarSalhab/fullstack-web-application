const { body, validationResult } = require("express-validator");

const emailValidator = () => {
	return body("email").isEmail().withMessage("Invalid email address");
};

const nameValidator = () => {
	return body("name")
		.trim()
		.isLength({ min: 4 })
		.withMessage("Name must be at least 4 characters long")
		.matches(/^[A-Za-z\s]+$/)
		.withMessage("Name must contain only letters and spaces");
};

const passwordValidator = () => {
	return body("password")
		.isLength({ min: 6 })
		.withMessage("Password must be at least 6 characters long");
};

const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	next();
};

module.exports = { emailValidator, passwordValidator, nameValidator, validate };
