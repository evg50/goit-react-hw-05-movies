import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MoviesView from '../../pages/MoviesView';
import Api from '../../service/MoviesApi';

export default function Trend() {
  const [movies, setMovies] = useState([]);
  // const location = useLocation();
  // console.log(location);
  // const backHref = location.state?.from ?? '/';

  // async function getResponse() {
  //   const responses = await Api.trendApi();
  //   if (responses.length) {
  //     setMovies(responses);
  //     // console.log(responses);
  //   }
  // }

  useEffect(() => {
    // console.log('до', movies.length);
    const getFetch = async () => {
      const resp = await Api.trendApi();
      if (resp.length) {
        setMovies(resp);
      }
    };
    // async function gResponse() {
    //   const responses = await Api.trendApi();
    //   if (responses.length) {
    //     setMovies(responses);
    //     // console.log(responses);
    //   }
    // }
    if (!movies.length) {
      getFetch();

      //   console.log('после', movies.length);
      //   // getResponse();
      //   return;
      // }
    }

    // console.log(movies);
  }, []);
  return (
    <div>
      <h2>Trending today</h2>

      <MoviesView movies={movies} />
    </div>
  );
}
//
