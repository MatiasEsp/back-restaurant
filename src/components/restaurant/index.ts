
import { Application } from 'express';
import restaurantApi from './restaurant.api'
import { RestaurantController } from './restaurant.controller'

export default (app: Application): void => {
  app.use(restaurantApi(RestaurantController));
};