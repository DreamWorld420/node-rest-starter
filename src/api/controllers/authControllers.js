const config = require("../../config");
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
		return res
			.status(200)
			.cookie("token", token, {
				maxAge: Number.parseInt(config.jwt_expires_in) * 24 * 60 * 60,
				httpOnly: true,
				secure: config.isDev ? false : true,
			})
			.json({
				status: "success",
				data: {
					token,
				},
			});
	}),

	protected: catchAsync(async (req, res, next) => {
		services.protected(req).then(() => {
			next();
		});
	}),
};
