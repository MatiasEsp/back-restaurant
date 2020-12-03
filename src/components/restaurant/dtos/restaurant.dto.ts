import { IRestaurant } from '../interfaces/restaurant.interface';

export class RestaurantDto implements IRestaurant {
  name: string = '';
  kindOfRestaurant: string = '';
  songs: string[] = [];
}