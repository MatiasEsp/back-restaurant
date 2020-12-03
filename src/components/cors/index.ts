
import { Application, Request, Response, NextFunction } from 'express';

export default (app: Application) => {
  app.use(function (req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
  });
}