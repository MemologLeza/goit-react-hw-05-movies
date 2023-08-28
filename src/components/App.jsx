import { Route, Routes } from 'react-router-dom';
import LayoutHeader from 'layouts/LayoutHeader';
import HomePage from 'pages/HomePage';

import { lazy } from 'react';

const NotFound = lazy(() => import('./NotFound/NotFound'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutHeader />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
