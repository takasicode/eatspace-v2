/* eslint-disable import/no-cycle */
import CONFIG from '../../globals/config';
import DetailHelper from '../../utils/detail-helper';

const createRestaurantListTemplate = (restaurant) => `
    <article class="list-item">
        <a href="#/detail/${restaurant.id}">
            <div class="list-thumbnail">
                <img class="list-item-thumbnail" tabindex="0" class="card-image" crossorigin="anonymous" alt="${restaurant.name
}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
                <p class="list-city">${restaurant.city}</p>
            </div>
            <div class="list-item-content">
                <p class="list-item-restaurant"><i title="ratings" class="fa fa-star card-rating"></i> ${restaurant.rating
}</p>
                <h2 class="list-item-title">${restaurant.name}</h2>
                <p class="list-item-description">${restaurant.description}</p>
            </div>
        </a>
    </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <img class="restaurant-picture" crossorigin="anonymous" alt="${restaurant.name
}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" tabindex="0" >
    
    <div class="detailRestaurant-header">
        <div class="detailRestaurant-info">
            <h2><i class="fas fa-info-circle"></i> Description</h2>
            <p class="restaurant-description">${restaurant.description}</p>
        </div>

        <div class="detailRestaurant">
            <h2><i class="fas fa-store"></i> Restaurant Name</h2>
            <p>${restaurant.name}</p>

            <h2><i class="far fa-compass"></i> Address</h2>
            <p>${restaurant.address}, ${restaurant.city}</p>
            
            <h2><i class="far fa-star"></i> Rate</h2>
            <p>${restaurant.rating}</p>

            <div class="restaurant-categories">
                <h2><i class="fas fa-utensils"></i> Categories</h2>
                ${restaurant.categories
    .map(
      (category) => `
                        <p class="restaurant-categories-title">${category.name}</p>
                    `,
    )
    .join('')}
            </div>
        </div>
    </div>

    <div class="detailRestaurant-menu">    
        <h2>Menu Restaurant</h2>
        <div class="restaurant-menu">
            <ol>
                <h3>Food</h3>
                ${restaurant.menus.foods
    .map((food) => `<li><p> ${food.name}</p></li>`)
    .join('')}
            </ol>         
            <ol>
                <h3>Drink</h3>
                ${restaurant.menus.drinks
    .map((drink) => `<li><p> ${drink.name}</p></li>`)
    .join('')}
            </ol>
        </div>
    </div> 

    <h2 class="review-title">Reviews</h2>
    ${DetailHelper.eachCustomersReview(restaurant)}
`;

const createCustomerReviewTemplate = (customerReview) => `
    <div class="detailRestaurant-review">
        <div class="restaurant-review" id="restaurant-review">
            <div class="review-header">
                <p class="review-name"><i class="far fa-user"></i> ${customerReview.name}</p>
                <p class="review-date">${customerReview.date}</p>
            </div>
            <div class="review-comment">
                <p>${customerReview.review}</p>
            </div>
        </div>
    </div>
`;

const createCustomerReviewFormTemplate = () => `
    <form class="form-review" id="form-review">
        <h2>Submit your review here :</h2>
        <div class="form-group">
            <label for="inputName">Name</label>
            <input id="inputName" type="text" class="form-control" placeholder="Your Name...">
        </div>
        <div class="form-group">
            <label for="inputReview">Review</label>
            <input id="inputReview" type="text" class="form-control" placeholder="Your Review...">
        </div>
        <div class="form-group">
            <button id="submitReview" type="submit" class="submitReview">Submit</button>
        </div>
    </form>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
        <i class="far fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
        <i class="fas fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantListTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createCustomerReviewTemplate,
  createCustomerReviewFormTemplate,
};
