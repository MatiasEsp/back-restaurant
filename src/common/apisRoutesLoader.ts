import { Application } from 'express';

import restaurantApi from '../components/restaurant/restaurant.api'

export default (app: Application): void => {
  app.use(restaurantApi);
  // ... other apis
};