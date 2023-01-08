import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  const backRef = location.state?.from ?? '/';
  return (
    <>
      <h1>Home</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/movies">Movies</Link>
      <br />

      {backRef !== '/' && (
        <Link to={backRef}>
          <button>Назад</button>
        </Link>
      )}

      <Outlet />
    </>
  );
}
