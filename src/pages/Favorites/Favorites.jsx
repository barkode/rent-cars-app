import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Favorite = () => {
  // useEffect(() => {
  // localStorage.getItem()
  // }, [])

  return (
    <main>
      <Helmet>
        <title>Your favorites</title>
      </Helmet>
      {/* Cars should be stored here */}
    </main>
  );
};
export default Favorite;
