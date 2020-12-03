import { IRestaurant } from '../interfaces/restaurant.interface';

export class RestaurantDto implements IRestaurant {
  name: string = '';
  kingOfRestaurant: string = '';
  songs: string[] = [];
}