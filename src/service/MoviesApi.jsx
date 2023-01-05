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
  // console.log(movieSearch);
  const config = {
    url: `search/movie`,
    params: {
      query: movieSearch,
    },
  };
  const { data } = await axios(config); // деструктуризируем из ответа нужное нам свойство data

  // console.log(response);
  return data.results; // возвращаем из свойства data свойство results/ на нем лежит массив фильмов
}
async function getMovieCast(movieId) {
  // console.log(movieSearch);
  const config = {
    url: `movie/${movieId}/credits`,
  };
  const { data } = await axios(config); // деструктуризируем из ответа нужное нам свойство data

  console.log('cast', data.cast);
  return data.cast; // возвращаем из свойства data свойство cast/ на нем лежит массив фильмов
}
async function getMovieReviews(movieId) {
  // console.log(movieSearch);
  const config = {
    url: `movie/${movieId}/reviews`,
    params: {
      language: 'en-Us',
    },
  };
  try {
    const { data } = await axios(config); // деструктуризируем из ответа нужное нам свойство data

    console.log('reviews', data.results);
    return data.results; // возвращаем из свойства data свойство results/ на нем лежит массив отзывов  content ( отзыв) и name ( имя автора)
  } catch (err) {
    return err.message;
  }
}
const Api = {
  trendApi,
  getMovieDetails,
  searchMovie,
  getMovieCast,
  getMovieReviews,
};

export default Api;
