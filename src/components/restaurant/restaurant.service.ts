import { RestaurantDto } from './dtos/restaurant.dto';
import { IRestaurant } from './interfaces/restaurant.interface';
import { RestaurantModel } from './restaurant.model';

const serviceGetRestaurantAll = async (): Promise<RestaurantDto[]> => {
  return await hardcodeJsonRestaurant();
}

const hardcodeJsonRestaurant = async (): Promise<RestaurantModel[]> => {
  const listRestaurantJson = require('./hardcodeRestaurant.json');
  return await parseListRestaurantModel(listRestaurantJson);
}

const parseListRestaurantModel = async (iRestaurants: any[]): Promise<RestaurantModel[]> => {
  if (!iRestaurants || !iRestaurants.length) {
    return [];
  }
  return iRestaurants.map((raw: IRestaurant) => parseRestaurantModel(raw));
}

const parseRestaurantModel = (iRestaurant: IRestaurant): RestaurantModel => {
  const { name, kingOfRestaurant, songs } = iRestaurant;
  const quotationDTO: RestaurantModel = new RestaurantModel(name, kingOfRestaurant, songs);
  return quotationDTO;
}

export const RestaurantService = {
  serviceGetRestaurantAll,
};