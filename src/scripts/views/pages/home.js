import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const home = {
  async render() {
    return `
      <div class="loader-container" id="loader-container">
        <div id="loader"></div>
      </div>

      <main class="content" id="content" tabindex="0">
        <div class="card">
          <h1 class="card-label">Best Restaurants</h1>
          <div class="lists" id="lists"></div>
        </div>
      </main>
    `;
  },

  async afterRender() {
    const list = await RestaurantDbSource.restaurantList();
    const restaurantContainer = document.querySelector('#lists');
    const mainContainer = document.querySelector('#hero');
    list.restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
    mainContainer.style.display = 'block';

    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.style.display = 'none';
  },
};

export default home;
