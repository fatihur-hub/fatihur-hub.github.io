import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    const firstCondition = "You haven't marked any restaurants as favorites. Time to pick your favorites!";
    return `
    <section class="blogs" id="blogs">
    <div class="heading">
       
        <h2>Restaurant Favorite</h2>
        ${firstCondition}
        <div class="box-container-blogs" id="like-restaurant" >
    </div>
    </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#like-restaurant');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
