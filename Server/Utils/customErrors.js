class CustomErrors extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";
    this.isOperational = true; // because it is used for operational errors
    Error.captureStackTrace(this, this.constructor); // If you didn’t pass this.constructor, the stack trace would also include unnecessary frames, such as the constructor function where the error was instantiated.
  }
}
module.exports = CustomErrors;