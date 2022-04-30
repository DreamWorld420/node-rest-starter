const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("../config/");
const routeMerger = require("../utils/routeMerger");
const routes = require("../api/routes/");
const GEH = require("../utils/GlobalErrorHandler");

module.exports = async (app) => {
	if (config.isDev) {
		app.use(morgan("dev"));
	}

	app.use(bodyParser.json());
	app.use(cookieParser());

	// router mounting
	routes.forEach((route) => {
		app.use(routeMerger(config.rootPath + route.path), route.router);
	});

	// global error handler
	app.use(GEH.global());
};
