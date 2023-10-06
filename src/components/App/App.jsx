import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import About from 'pages/AboutPage';
import CarCatalog from 'pages/CarCatalog';
import Favorite from 'pages/Favorite';
import NotFound from 'pages/NotFound';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<About />} />
          <Route path="catalog" element={<CarCatalog />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
