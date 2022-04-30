class APIError extends Error {
	constructor(message, statusCode = 500, isOperational = true) {
		super(message);

		this.statusCode = statusCode;
		this.isOperational = isOperational;
		this.status = statusCode.toString().startsWith("4") ? "fail" : "error";

		Error.captureStackTrace(this, this.constructor);
	}
}

module.exports = APIError;
