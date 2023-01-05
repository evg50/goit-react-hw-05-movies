import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MoviesView from '../../pages/MoviesView';
import Api from '../../service/MoviesApi';

export default function Trend() {
  const [movies, setMovies] = useState([]);

  async function getResponse() {
    const responses = await Api.trendApi();
    if (responses.length) {
      setMovies(responses);
      // console.log(responses);
    }
  }

  useEffect(() => {
    // console.log('до', movies.length);
    if (!movies.length) {
      // console.log('после', movies.length);
      getResponse();
      return;
    }

    // console.log(movies);
  }, [movies]);
  return (
    <div>
      <h2>Trending today</h2>

      <MoviesView movies={movies} />
    </div>
  );
}
//
