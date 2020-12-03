
import { Request, Response, NextFunction } from 'express';

export interface IRestaurantController {
  getRestaurantAll: (req: Request, res: Response, next: NextFunction) => void;
  postRestaurant: (req: Request, res: Response, next: NextFunction) => void;
}