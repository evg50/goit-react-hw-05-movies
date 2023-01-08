// import { Sales } from 'pages/Sales';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { useState, lazy } from 'react';
// import SearchBar from './SearchBar/SearchBar';
// import Reviews from './Reviews/Reviews';
import Home from './Home/Home';
// import Trend from './Trend/Trend';
// import { InvoiceDetails } from './InvoiceDetails';
// import { Invoices } from './Invoices';
// import { Layout } from './Layout';
// import Cast from './Cast/Cast';
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const SearchBar = lazy(() => import('./SearchBar/SearchBar'));
const Trend = lazy(() => import('./Trend/Trend'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));
// import MovieDetails from './MovieDetails/MovieDetails';

// import MoviesApiClass from '../service/MoviesApiClass';
// import NewsApi from '../service/NewsApi';

export const App = () => {
  const [movieId, setMovieId] = useState(null);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Trend />} />
          {/* <Suspense fallback={null}> */}
          <Route path="movies" element={<SearchBar />} />
          {/* </Suspense> */}

          <Route
            path="movies/:movieId"
            element={
              <MovieDetails
                changeMovieId={id => {
                  setMovieId(id);
                }}
              />
            }
          >
            <Route path="cast" element={<Cast id={movieId} />} />
            <Route path="reviews" element={<Reviews id={movieId} />}></Route>
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
