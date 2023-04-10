import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANTS_LIST: `${CONFIG.BASE_URL}list`,
  DETAIL_RESTAURANTS: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  POST_REVIEWS: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
