const morgan = require("morgan");
const config = require("../config/");

module.exports = async (app) => {
	if (config.isDev) {
		app.use(morgan("dev"));
	}
};
