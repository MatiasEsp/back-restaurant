
import { Request, Response, NextFunction } from 'express';
import { RestaurantDto } from './dtos/restaurant.dto';
import { IRestaurant } from './interfaces/restaurant.interface';
import { RestaurantModel } from './restaurant.model';
import { RestaurantService } from './restaurant.service';

const getRestaurantAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const listRestaurantDto: RestaurantDto[] = await RestaurantService.serviceGetRestaurantAll();
    return res.json(listRestaurantDto);
  } catch (error) {
    return res.status(400).json({ status: 'error', msjError: '' });
  }
};
const postRestaurant = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newRestaurantDto: RestaurantDto = req.body as IRestaurant;
    const newrestaurant: RestaurantModel = await RestaurantService.saveNewRestaurant(newRestaurantDto);
    return res.status(201).json(newrestaurant);
  } catch (error) {
    return res.status(400).json({ status: 'error', msjError: '' });
  }
};

export const RestaurantController = {
  getRestaurantAll,
  postRestaurant,
}