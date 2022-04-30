const APIError = require("./APIError");

module.exports = {
	global() {
		return (err, req, res, next) => {
			let newErr = err;

			if (newErr.code === 11000) {
				newErr = new APIError("Duplicate database item", 400, true);
			}

			return res.status(newErr.statusCode).json({
				status: newErr.status,
				message: newErr.message,
				stack: !newErr.isOperational ? newErr.stack : undefined,
			});
		};
	},

	catchAsync(fn) {
		return (req, res, next) => {
			fn(req, res, next).catch(next);
		};
	},
};
