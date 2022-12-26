import { Outlet, Link } from 'react-router-dom';

import MoviesApi from '../../service/MoviesApi';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/movies">Movies</Link>
      <Outlet />
    </>
  );
}
