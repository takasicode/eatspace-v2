/* eslint-disable no-alert */
import RestaurantDbSource from '../data/restaurantdb-source';
import UrlParser from '../routes/url-parser';
import {
  createCustomerReviewFormTemplate,
  createCustomerReviewTemplate,
} from '../views/templates/template-creator';
import DateHelper from './date-helper';

const CustomerReviewInitiator = {
  init({ customerReviewContainer, customerReviewFormContainer }) {
    this._customerReviewContainer = customerReviewContainer;
    this._customerReviewFormContainer = customerReviewFormContainer;
    this._renderForm();
  },

  _renderForm() {
    this._customerReviewFormContainer.innerHTML = createCustomerReviewFormTemplate();
    this._isFormSubmitted();
  },

  _isFormSubmitted() {
    const reviewFormElement = document.querySelector('#form-review');

    reviewFormElement.addEventListener('submit', (e) => {
      e.preventDefault();

      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const inputName = document.querySelector('#inputName');
      const inputReview = document.querySelector('#inputReview');
      const data = {
        id: url.id,
        name: inputName.value,
        review: inputReview.value,
      };
      this._makeRequest(data);
    });
  },

  async _makeRequest(data) {
    const inputName = document.querySelector('#inputName');
    const inputReview = document.querySelector('#inputReview');
    const responseJSON = await RestaurantDbSource.postRestaurantReview(data);
    const date = new Date();
    const { id } = data;
    const { name } = data;
    const { review } = data;
    if ((await responseJSON.error) === false) {
      this._customerReviewContainer.innerHTML += createCustomerReviewTemplate({
        id,
        name,
        review,
        date: `
        ${date.getDate()} ${DateHelper.monthNameChecker(
  date.getMonth(),
)} ${date.getFullYear()}
         `,
      });
      inputName.value = '';
      inputReview.value = '';

      alert('Review has been successfuly added!');
    } else {
      alert('Can not be empty', await responseJSON.message);
    }
  },
};

export default CustomerReviewInitiator;
