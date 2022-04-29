const expressLoader = require("./expressLoader");
const mongooseLoader = require("./mongooseLoader");

module.exports = {
	async init(expressOptions, mongooseOptions) {
		await expressLoader(expressOptions.app);
		await mongooseLoader(mongooseOptions);
	},
};
