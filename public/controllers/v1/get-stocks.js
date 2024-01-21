"use strict";

const {
  Router
} = require('express');
const models = require('../../models').default;
const asyncWrapper = require('../../utils/asyncWrapper');
const router = Router();
const {
  Stocks
} = models;
router.get('/stocks', asyncWrapper(async (req, res) => {
  const stocks = await Stocks.findAll();
  if (!stocks.length) {
    res.status(404).send({
      success: false,
      message: 'No stock found'
    });
  }
  res.status(200).send({
    data: {
      stocks
    }
  });
}));
module.exports = router;