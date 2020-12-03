import { Filter, RestaurantRespository } from '../../repository/repository.restaurant';
import { RestaurantDto } from './dtos/restaurant.dto';
import { IRestaurant } from './interfaces/restaurant.interface';
import { RestaurantModel } from './restaurant.model';

const serviceGetRestaurantAll = async (query?: Filter): Promise<RestaurantDto[]> => {
  if (!!query && !!query.kindOfRestaurant) {
    return await RestaurantRespository.getRestaruantAllFilter(query.kindOfRestaurant);
  }
  return await RestaurantRespository.getRestaruantAll();
}

const saveNewRestaurant = async (iRestaurant: IRestaurant): Promise<RestaurantModel> => {
  const buildRestaurant: RestaurantModel = parseRestaurantModel(iRestaurant);
  if (!await isRestaurantUniqueName(buildRestaurant)) {
    throw Error('Error por reaturant unico');
  }
  const saveRestaurant = RestaurantRespository.saveRestaruant(buildRestaurant);
  if (!saveRestaurant) {
    throw Error('Error en guardar');
  }
  return saveRestaurant;
}

const isRestaurantUniqueName = async (restaurant: RestaurantModel): Promise<boolean> => {
  const restaurantCoincidente = RestaurantRespository.getRestaruantByName(restaurant.name);
  return !restaurantCoincidente;
}

const parseRestaurantModel = (iRestaurant: IRestaurant): RestaurantModel => {
  const { name, kindOfRestaurant, songs } = iRestaurant;
  const quotationDTO: RestaurantModel = new RestaurantModel(name, kindOfRestaurant, songs);
  return quotationDTO;
}

export const RestaurantService = {
  serviceGetRestaurantAll,
  saveNewRestaurant,
};