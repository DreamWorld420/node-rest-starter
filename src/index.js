const express = require("express");
const config = require("./config/");
const loader = require("./loaders/");

(async () => {
	const app = express();

	await loader.init({ app }, { dbName: "test" });

	app.listen(config.port_dev, config.host_dev, () => {
		console.log(
			`server is listening on http://${config.host_dev}:${config.port_dev}`
		);
	});
})();
