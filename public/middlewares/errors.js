"use strict";

const environments = require("../config/environments");
module.exports = function errorsMiddleware(err, req, res, next) {
  environments.nodeEnv !== 'test' && console.error('Error in errors middleware:\n', err.stack);
  res.status(500).send({
    success: false,
    message: err.message
  });
};