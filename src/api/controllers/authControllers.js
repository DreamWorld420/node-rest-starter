const services = require("../../services/authServices");
const { catchAsync } = require("../../utils/GlobalErrorHandler");

module.exports = {
	signup: catchAsync(async (req, res, next) => {
		const user = await services.signup(req);
		return res.status(200).json({
			status: "success",
			data: {
				user,
			},
		});
	}),

	login: catchAsync(async (req, res, next) => {
		const token = await services.login(req);
	}),
};
