module.exports = {
	global(err, req, res, next) {
		return res.status(err.statusCode).json({
			status: res.status,
			message: err.message,
		});
	},
};
