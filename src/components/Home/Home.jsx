import { Outlet, Link } from 'react-router-dom';

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
