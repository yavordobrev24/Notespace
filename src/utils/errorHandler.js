const { MongooseError } = require("mongoose");

exports.extractErrorMsgs = (error) => {
  const isMongooseError = error instanceof MongooseError;
  if (isMongooseError) {
    const errors = Object.values(error.errors);
    const msgs = errors.map((e) => e.message);
    return msgs;
  }
  return [error.message];
};
