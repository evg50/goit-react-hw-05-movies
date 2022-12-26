import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Api from '../../service/MoviesApi';
import axios from 'axios';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  // console.log(movieId);

  async function getResponse() {
    const response = await Api.getMovieDetails(movieId);
    setMovieDetails(response);
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
  console.log('genres array', genres);
  return (
    <>
      <Link to="/movies" /> Go back к мовиес
      <h1>{title}</h1>;<p>{vote_average}</p>
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
    </>
  );
}
//<li key={g.id}>{g.name}</li>;
