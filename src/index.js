const express = require("express");
const config = require("./config/");

(async () => {
	const app = express();

	app.listen(config.port_dev, config.host_dev, () => {
		console.log(
			`server is listening on http://${config.host_dev}:${config.port_dev}`
		);
	});
})();
