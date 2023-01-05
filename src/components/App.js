// import { Sales } from 'pages/Sales';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { useState } from 'react';

// import { InvoiceDetails } from './InvoiceDetails';
// import { Invoices } from './Invoices';
// import { Layout } from './Layout';
import Cast from './Cast/Cast';
import MovieDetails from './MovieDetails/MovieDetails';
import SearchBar from './SearchBar/SearchBar';
import Reviews from './Reviews/Reviews';
import Home from './Home/Home';
import Trend from './Trend/Trend';
// import MoviesApiClass from '../service/MoviesApiClass';
// import NewsApi from '../service/NewsApi';

export const App = () => {
  const [movieId, setMovieId] = useState(null);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Trend />} />
          <Route path="movies" element={<SearchBar />} />
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
