module.exports = {
	global() {
		return (err, req, res, next) => {
			return res.status(err.statusCode).json({
				status: res.status,
				message: err.message,
			});
		};
	},

	catchAsync(fn) {
		return (req, res, next) => {
			fn(req, res, next).catch(next);
		};
	},
};