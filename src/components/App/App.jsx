import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import About from 'pages/AboutPage';
import CarCatalog from 'pages/CarCatalog';
import Favorite from 'pages/Favorite';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/catalog">CAR CATALOG</NavLink>
        <NavLink to="/favorite">FAVORITE</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/catalog" element={<CarCatalog />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
