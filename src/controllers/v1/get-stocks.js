import { Router } from 'express';
import models from '../../models';
import asyncWrapper from '../../utils/asyncWrapper';

const router = Router();
const { Stocks } = models;

router.get(
  '/stocks',
  asyncWrapper(async (req, res) => {
    const stocks = await Stocks.findAll();
    if (!stocks.length) {
      res.status(404).send({ success: false, message: 'No stock found' });
    }

    res.status(200).send({
      data: {
        stocks,
      },
    });
  })
);

export default router;
