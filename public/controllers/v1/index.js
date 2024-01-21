"use strict";

const {
  Router
} = require("express");
const stockRouter = require("./get-stocks");
const router = Router();
router.use(stockRouter);
module.exports = router;