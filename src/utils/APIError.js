class APIError extends Error {
	constructor(message, statusCode, isOperational) {
		super(message);

		this.statusCode = statusCode;
		this.isOperational = isOperational;
		this.statue = statusCode.startsWith("4") ? "fail" : "error";

		Error.captureStackTrace(this, this.constructor);
	}
}

module.exports = APIError;
