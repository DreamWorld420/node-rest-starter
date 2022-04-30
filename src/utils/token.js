const JWT = require("jsonwebtoken");
const { promisify } = require("util");
const config = require("../config/");

module.exports = {
	async generateToken(_id) {
		return promisify(JWT.sign)({ _id }, config.jwt_secret, {
			expiresIn: config.jwt_expires_in,
		});
	},

	async verify(token) {
		return promisify(JWT.verify)(token, config.jwt_secret);
	},
};
