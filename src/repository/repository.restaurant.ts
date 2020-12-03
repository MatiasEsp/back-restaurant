import { RestaurantModel } from '../components/restaurant/restaurant.model';

export class RestaurantRespository {
  static data: RestaurantModel[] = [];

  static getRestaruantAll(): RestaurantModel[] {
    return this.data;
  }

  static getRestaruantByName(name: string): RestaurantModel | undefined {
    return this.data.find(item => item.name.toUpperCase() === name.toUpperCase());
  }

  static saveRestaruant(restaurant: RestaurantModel) {
    restaurant.id = this.data.length;
    this.data.push(restaurant)
    return restaurant;
  }
}