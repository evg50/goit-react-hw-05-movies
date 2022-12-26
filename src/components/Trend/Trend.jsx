import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

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
      <h2>Trhding today</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>

            {/* <img src={movie.backdrop_path} alt={movie.title} /> */}
          </li>
        ))}
      </ul>
      {movies.length && <div>тут будет TrendList</div>}
    </div>
  );
}
