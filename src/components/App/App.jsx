import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CarCatalog = lazy(() => import('pages/CarCatalog/CarCatalog'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CarCatalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
