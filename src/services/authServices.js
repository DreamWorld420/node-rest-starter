const User = require("../models/User");

module.exports = {
	async signup(req) {
		const user = await User.create({
			username: req.body.username,
			password: req.body.password,
			email: req.body.password,
		});
		return user;
	},
};
