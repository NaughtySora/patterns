"use strict";

const domain = require("./domain.js");

class ValidationError extends Error {
  details = null;
  code = 400;
  constructor(message, options) {
    super(message, { cause: options?.cause });
    Error.captureStackTrace(this, ValidationError);
    if (typeof options?.code == "number") {
      this.code = options.code;
    }
    if (options?.details) {
      this.details = options.details;
    }
  }
}

// Application controllers.
// Accept, validate data, possible properly structure before sending up to HTTP controller.
module.exports = {
  async "GET:/seed"(query, body) {
    return domain.seed();
  },
  async "POST:/reseed"(query, body) {
    if (typeof body?.seed != "number") {
      throw new ValidationError("Invalid seed", { details: { body, query } });
    }
    return domain.reseed(body.seed);
  },
};