import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <p>SharedLayout</p>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/catalog">CAR CATALOG</NavLink>
        <NavLink to="/favorites">FAVORITE</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default SharedLayout;
