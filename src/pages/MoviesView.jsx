import { Link, useLocation } from 'react-router-dom';

export default function MoviesView({ movies }) {
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();
  console.log(movies);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>

          <img
            src={`${baseImageUrl}${movie.backdrop_path}`}
            alt={movie.title}
            width="300"
          />
        </li>
      ))}
    </ul>
  );
}
