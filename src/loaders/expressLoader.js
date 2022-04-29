const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("../config/");

module.exports = async (app) => {
	if (config.isDev) {
		app.use(morgan("dev"));
	}

	app.use(bodyParser.json());
};
