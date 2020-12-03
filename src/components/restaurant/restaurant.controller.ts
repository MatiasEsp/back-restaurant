
import { Request, Response, NextFunction } from 'express';

const getRestaurantAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json();
  } catch (error) {
    return res.status(400).json({ status: 'error', msjError: '' });
  }
};
const postRestaurant = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(201).json();
  } catch (error) {
    return res.status(400).json({ status: 'error', msjError: '' });
  }
};

export const RestaurantController = {
  getRestaurantAll,
  postRestaurant,
}