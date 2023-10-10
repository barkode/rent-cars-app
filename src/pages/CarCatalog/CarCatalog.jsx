import React, { useEffect, useState } from 'react';
// import requestApi from '../../utils/requestApi';
import { Helmet } from 'react-helmet-async';
import CarList from 'components/CarList/CarList';
import axios from 'axios';

const CarCatalog = () => {
  const [carItems, setCarItems] = useState(null);
  const [page, setPage] = useState(1);
  const [isBtnShown, setIsBtnShown] = useState(true);
  // const [showModal, setShowModal] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const getCars = async () => {
      try {
        const res = await axios.get(
          'https://65202ee6906e276284c42681.mockapi.io/advert'
        );
        setCarItems(res.data);
        console.log(res.data);
      } catch (error) {
        setIsError(error.request);
      }
    };
    getCars();
  }, []);

  // const toggleModal = () => {
  //   setShowModal(prev => (prev = !prev));
  // };

  // const getCars = () => {
  //   try {
  //     const res = requestApi();
  //     setCarItems(res.data);
  //     console.log(carItems);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <main>
      <Helmet>
        <title>Rent cars catalog</title>
      </Helmet>
      <main>
        {carItems ? <CarList carItems={carItems} /> : <div>LOADING.....</div>}
        <button type="button">Load more</button>
      </main>
    </main>
  );
};

export default CarCatalog;
