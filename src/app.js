const express = require('express');
const environment = require('./config/environments');
const logger = require('morgan');
const cors = require('cors');
const errorsMiddleware = require('./middlewares/errors');
const { v1Routes } = require('./controllers');

module.exports =class App {
  constructor() {
    this.app = express();
    this.app.use(
      logger('dev', { skip: (req, res) => environment.nodeEnv === 'test' })
    );
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.setRoutes();
  }

  setRoutes() {
    this.app.use('/v1', v1Routes);
    this.app.use(errorsMiddleware);
  }

  getApp() {
    return this.app;
  }

  listen() {
    const { port } = environment;
    this.app.listen(port, () => {
      console.log(`Listening at port ${port}`);
    });
  }
}
