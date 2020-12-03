# back-restaurant
Nodejs

# Deploy production
npm run start

**Implementacion de api "/restaurant/v1" verbo: Get y Post**

* Get: todos los restaurant "/restaurant/v1?kindOfRestaurant=filterKindofrestaurant".
-> Param filterKindofrestaurant: filtro de restaurantes por el atributo kindofrestaurant

* Post: alta de un nuevo restaurant.
-> Requiere restaurant.name unico
-> body: { name: string, kindOfRestaurant: string, songs: string[]}

**Implementacion Repostitorio Restaurant**

* ListaRestaurante Hardcodeada
* Permite: getRestaruantAll, getRestaruantByName y saveRestaruant