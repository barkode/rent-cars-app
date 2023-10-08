import React from 'react';
import requestApi from '../../utils/requestApi';
import { Helmet } from 'react-helmet-async';

const CarCatalog = () => {
  console.log(requestApi());

  return (
    <>
      <Helmet>
        <title>Rent cars catalog</title>
      </Helmet>
      <h1>THIS PAGE IS CAR CATALOG</h1>
    </>
  );
};

export default CarCatalog;
