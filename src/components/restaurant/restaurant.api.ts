import { Router } from 'express';
import { IRestaurantController } from './interfaces/iRestaurant.controller';

const router = (controller: IRestaurantController) =>{
  const router = Router();
  const api = '/restaurant/v1';
  
  router.get(`${api}`, controller.getRestaurantAll);
  router.post(`${api}`, controller.postRestaurant);
return router;
}


export default router;