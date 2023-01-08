import { Link, useLocation, useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Api from '../../service/MoviesApi';
import Search from '../Search';
// Search
import MoviesView from '../../pages/MoviesView';
export default function SearchBar() {
  const [movies, setMovies] = useState([]);
  // const [search, setSearch] = useState('');

  // const changeSearch = e => {
  //   setSearch(e.target.value);
  // };
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  // async function submitHeandler(e) {
  //   e.preventdefault(e);
  //   // const response = await Api.searchMovie(e.target.value);
  //   console.log('submit', e);
  //   // return response;
  // }

  // запись в строку сост и в стейт серча
  const onChangeString = e => {
    console.log(e);
    setParams({ query: e });

    // setSearch(e);
  };
  // async function fetchApi(getParams) {
  //   if (!getParams) {
  //     getSearchParams();
  //   }

  // const response = await Api.searchMovie(getParams);
  // console.log(response);
  // return response;
  // }
  // запись в гет парамс строку запроса
  // function getSearchParams() {
  //   const getParams = params.get('query');
  //   // console.log(getParams);
  //   return getParams;
  // }
  // оптравка на сервис за http запросом
  // async function fetchSearch(getParams) {
  //   const response = await fetchApi(getParams);
  //   console.log(response);
  //   setMovies(response);
  //   return response;
  // }
  useEffect(() => {
    // const getParams = getSearchParams();
    // console.log('useEffect');
    const getParams = params.get('query');
    // console.log(getParams);
    const fetchData = async searchMovie => {
      const data = await Api.searchMovie(searchMovie);
      console.log('data', data);
      setMovies(data);
      // return data;
    };
    if (getParams) {
      console.log('QUERY HTTP', fetchData(getParams));

      fetchData(getParams);
      console.log('location в поиске', location);
      // location.state = { from: location };
      console.log('location в поиске after', location);
      return;
    }
  }, [params]);
  // const queryParams = params.get('query');
  return (
    <div>
      <h1>Movies</h1>

      {/* <Link to="/">
        <button>Go back Movies</button>
      </Link> */}
      <br />

      <Search onChange={onChangeString} value={movies} />
      {movies.length && <MoviesView movies={movies} />}
    </div>
  );
}
