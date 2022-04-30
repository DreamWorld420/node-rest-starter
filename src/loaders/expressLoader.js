const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("../config/");
const utils = require("../utils/");
const routes = require("../api/routes/");

module.exports = async (app) => {
	if (config.isDev) {
		app.use(morgan("dev"));
	}

	app.use(bodyParser.json());
	app.use(cookieParser());

	// router mounting
	routes.forEach((route) => {
		app.use(utils.routerMerger(config.rootPath + route.path), route.router);
	});
};
