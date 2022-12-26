import { Link, useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Api from '../../service/MoviesApi';
import Search from '../Search';
// Search

export default function SearchBar() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const changeSearch = e => {
    setSearch(e.target.value);
  };
  const [params, setParams] = useSearchParams();

  async function submitHeandler(e) {
    e.preventdefault(e);
    // const response = await Api.searchMovie(e.target.value);
    console.log('submit', e);
    // return response;
  }
  const onChangeString = e => {
    console.log(e);
    setParams({ query: e });
  };

  const queryParams = params.get('query');
  return (
    <div>
      <h1>Movies</h1>
      <Link to="/">Go back Movies</Link>
      <br />
      <Search onChange={onChangeString} />

      {/* <form onSubmit={submitHeandler}>
        <h2>search film</h2>
        <input type="text" />
        <button
          type="submit"
          // name="movieSearch"
          value={search}
          autoFocus
          onChange={changeSearch}
        >
          Search
        </button>
      </form> */}
    </div>
  );
}
