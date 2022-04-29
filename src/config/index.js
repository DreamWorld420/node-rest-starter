require("dotenv").config({ path: `${__dirname}/../../.env` });

module.exports = {
	node_env: process.env.NODE_ENV,
	port_dev: process.env.PORT_DEV,
	host_dev: process.env.HOST_DEV,
	mongodb_uri_dev: process.env.MONGODB_URI_DEV,
};
