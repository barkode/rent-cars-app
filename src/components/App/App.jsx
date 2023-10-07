import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import About from 'pages/AboutPage/AboutPage';
import CarCatalog from 'pages/CarCatalog/CarCatalog';
import Favorites from 'pages/Favorites/Favorites';
import NotFound from 'pages/NotFound/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<About />} />
          <Route path="catalog" element={<CarCatalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
