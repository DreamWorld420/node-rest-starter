const services = require("../../services/authServices");

module.exports = {
	async signup(req, res, next) {
		const user = await services.signup(req);
		return res.status(200).json({
			status: "success",
			data: {
				user,
			},
		});
	},
};
