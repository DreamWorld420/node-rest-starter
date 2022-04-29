const mongoose = require("mongoose");
const config = require("../config/");

module.exports = async ({ dbName, options, callback }) => {
	mongoose.connect(config.mongodb_uri_dev + dbName, options, callback);
};
