import { Router } from 'express';
import { RestaurantController } from './restaurant.controller';

const router = Router();

const api = '/restaurant/v1';

router.get(`${api}`, RestaurantController.getRestaurantAll);
router.get(`${api}`, RestaurantController.postRestaurant);

export default router;