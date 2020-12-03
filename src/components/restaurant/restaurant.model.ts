export class RestaurantModel {
  id?: number;
  name: string;
  kindOfRestaurant: string;
  songs: string[];

  constructor(name: string, kindOfRestaurant: string, songs: string[]) {
    this.name = name;
    this.kindOfRestaurant = kindOfRestaurant;
    this.songs = songs;
  }
}