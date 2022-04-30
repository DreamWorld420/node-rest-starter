require("dotenv").config({ path: `${__dirname}/../../.env` });

module.exports = {
	node_env: process.env.NODE_ENV,
	port_dev: process.env.PORT_DEV,
	host_dev: process.env.HOST_DEV,
	mongodb_uri_dev: process.env.MONGODB_URI_DEV,
	jwt_secret: process.env.JWT_SECRET,
	jwt_expires_in: process.env.JWT_EXPIRES_IN,
	isDev: process.env.NODE_ENV === "development",
	rootPath: "/api/v1/",
};
