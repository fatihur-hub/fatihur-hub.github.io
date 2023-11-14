import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="jumbotron">
      <div class="jumbotron_body">
        <h1 class="jumbotron_brand">Foodiest</h1>
        <p class="jumbotron_caption">Deserve The Best</p>
      </div>
    </div>
    

    <section class="blogs" id="content">
    <div class="heading">
        <h3>Daftar Restaurant Terbaik</h3>
        <div class="box-container-blogs" id="restaurant-list" >
    </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    const restaurantsContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
