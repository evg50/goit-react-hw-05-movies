import { Link, Outlet, useParams, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Api from '../../service/MoviesApi';
// import Reviews from 'components/Reviews/Reviews';

// import axios from 'axios';

export default function MovieDetails({ changeMovieId }) {
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  // console.log(movieId);
  const location = useLocation();
  console.log(location);
  const backHref = location.state?.from ?? '/';
  async function getResponse() {
    const response = await Api.getMovieDetails(movieId);
    setMovieDetails(response);
    changeMovieId(movieId);
  }
  useEffect(() => {
    getResponse();
  }, []);
  const {
    genres = [],
    poster_path,
    vote_average,
    title,
    overview,
  } = movieDetails;
  // console.log('genres array', genres);
  return (
    <>
      <br />
      <Link to={backHref}>
        <button>Go back</button>
      </Link>
      <h1>{title}</h1>;<p>{vote_average}</p>
      <img src={`${baseImageUrl}${poster_path}`} alt={title} width="360" />
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      {
        <ul>
          {genres.map(g => {
            <div>map</div>;
          })}
        </ul>
      }
      <p>Additional information</p>
      <Link to="cast">cast</Link>
      <br />
      <Link to="reviews">reviews</Link>
      <Outlet />
    </>
  );
}
//<li key={g.id}>{g.name}</li>;
