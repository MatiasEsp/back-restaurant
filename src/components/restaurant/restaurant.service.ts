import { Filter, RestaurantRespository } from '../../repository/repository.restaurant';
import { RestaurantDto } from './dtos/restaurant.dto';
import { IRestaurant } from './interfaces/restaurant.interface';
import { RestaurantModel } from './restaurant.model';

const serviceGetRestaurantAll = async (): Promise<RestaurantDto[]> => {
  return await RestaurantRespository.getRestaruantAll();
}

const serviceGetRestaurantAllOfKindOfRestaurant = async (kindOfRestaurant: string): Promise<RestaurantDto[]> => {
  const data = await (await RestaurantRespository.getRestaruantAll()).filter(item => item.kindOfRestaurant.toUpperCase() === kindOfRestaurant.toUpperCase());
  return data;
}

const saveNewRestaurant = async (iRestaurant: IRestaurant): Promise<RestaurantModel> => {
  const buildRestaurant: RestaurantModel = parseRestaurantModel(iRestaurant);
  if (!await isRestaurantUniqueName(buildRestaurant)) {
    throw Error('Error por reaturant unico');
  }
  const newRestaurant = hardcodeJsonSaveRestaurant(buildRestaurant);
  return newRestaurant;
}

const isRestaurantUniqueName = async (restaurant: RestaurantModel): Promise<boolean> => {
  const restaurantCoincidente = RestaurantRespository.getRestaruantByName(restaurant.name);
  return !restaurantCoincidente;
}

const hardcodeJsonSaveRestaurant = async (newRestaurant: RestaurantModel): Promise<RestaurantModel> => {
  const saveRestaurant = RestaurantRespository.saveRestaruant(newRestaurant);
  if (!saveRestaurant) {
    throw Error('Error en guardar');
  }
  return saveRestaurant;
}

const parseRestaurantModel = (iRestaurant: IRestaurant): RestaurantModel => {
  const { name, kindOfRestaurant, songs } = iRestaurant;
  const quotationDTO: RestaurantModel = new RestaurantModel(name, kindOfRestaurant, songs);
  return quotationDTO;
}

export const RestaurantService = {
  serviceGetRestaurantAll,
  serviceGetRestaurantAllOfKindOfRestaurant,
  saveNewRestaurant,
};