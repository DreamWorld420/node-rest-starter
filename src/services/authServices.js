const User = require("../models/User");
const APIError = require("../utils/APIError");
const Token = require("../utils/Token");

module.exports = {
	async signup(req) {
		const user = await User.create({
			username: req.body.username,
			password: req.body.password,
			email: req.body.password,
		});
		return user;
	},

	async login(req) {
		const { username, password } = req.body;

		if (!(username && password)) {
			throw new APIError("please provide username and password", 400);
		}

		const user = await User.findOne({ username }).select("+password");

		if (!(user && (await user.isValidPassword(password, user.password)))) {
			throw new APIError("Invalid username or password", 400);
		}

		return Token.generate(user._id);
	},

	async protected(req) {
		const token = req.cookies["token"];

		if (!token) {
			throw new APIError("please login", 400);
		}

		const { _id } = await Token.verify(token);

		const user = await User.findById(_id);

		if (!user) {
			throw new APIError("bad token", 400);
		}

		req.user = user;
	},
};
