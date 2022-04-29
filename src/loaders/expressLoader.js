const morgan = require("morgan");
const config = require("../config");

module.exports = async (app) => {
	if (config.node_env === "development") {
		app.use(morgan("dev"));
	}
};
