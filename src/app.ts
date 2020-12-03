import express, { Application, NextFunction, Request, Response } from 'express';
import { Server } from 'http';
import apisRoutesLoader from './common/apisRoutesLoader';

const bodyParser = require('body-parser');

export default class App {
  private app: Application;

  constructor() {
    this.app = express();
  }

  public init(): void {

    this.app.use(function (req: Request, res: Response, next: NextFunction) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      next();
    });

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    apisRoutesLoader(this.app);

    this.app.use(`/`, (req: Request, res: Response, next: NextFunction) => {
      res.json(`··· 404 Undefined ···`);
      next();
    });
  }

  startServer(port: number): Server {
    return this.app.listen(port, () => {
      console.log(`app server running on port ${port}...`);
      this.init();
    });
  }
}