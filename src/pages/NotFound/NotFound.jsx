import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Ups;( Wrong page.</title>
      </Helmet>
      <h1>PAGE NOT FOUND</h1>
    </>
  );
};

export default NotFound;
