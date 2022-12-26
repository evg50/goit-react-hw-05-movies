import axios from 'axios';
import { func } from 'prop-types';
const API_KEY = '3b0a0f3678b03bfe7113d836939cb420';
const BASE_URL = 'https://api.themoviedb.org/3/';
axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'ru-Ru',
};

async function trendApi() {
  const config = {
    url: `trending/movie/day`,
  };

  const { data } = await axios(config);

  // console.log('response Api', data);
  return data.results;
}
async function getMovieDetails(movieId) {
  const config = {
    url: `movie/${movieId}`,
  };
  const { data } = await axios(config);

  console.log(data);
  return data;
}
async function searchMovie(movieSearch) {
  console.log(movieSearch);
  const config = {
    url: `search/movie/&query=${movieSearch}`,
  };
  const response = await axios(config);

  console.log(response);
  return response;
}
const Api = {
  trendApi,
  getMovieDetails,
};

export default Api;
