import express from 'express';
import environment from './config/environments';
import logger from 'morgan';
import errorsMiddleware from './middlewares/errors';
import { v1Routes } from './controllers';
import cors from 'cors'
export default class App {
  constructor() {
    this.app = express();
    this.app.use(logger('dev', { skip: (req, res) => environment.nodeEnv === 'test' }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors())
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