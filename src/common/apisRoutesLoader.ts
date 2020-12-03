import { Application } from 'express';

import restaurantApi from '../components/restaurant/restaurant.api'
import { RestaurantController } from '../components/restaurant/restaurant.controller'

const routerRestaurant = restaurantApi(RestaurantController);

export default (app: Application): void => {
  app.use(routerRestaurant);
  // ... other apis
};