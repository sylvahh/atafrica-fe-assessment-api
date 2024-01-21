"use strict";

module.exports = function asyncWrapper(callback) {
  return function (req, res, next) {
    callback(req, res, next).catch(next);
  };
};