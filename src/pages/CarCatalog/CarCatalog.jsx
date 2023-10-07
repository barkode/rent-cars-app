import React from 'react';
import requestApi from '../../utils/requestApi';

const CarCatalog = () => {
  console.log(requestApi());
  return (
    <>
      <h1>THIS PAGE IS CAR CATALOG</h1>
    </>
  );
};

export default CarCatalog;
