export class RestaurantModel {
  name: string;
  kingOfRestaurant: string;
  songs: string[];

  constructor(name: string, kingOfRestaurant: string, songs: string[]) {
    this.name = name;
    this.kingOfRestaurant = kingOfRestaurant;
    this.songs = songs;
  }
}