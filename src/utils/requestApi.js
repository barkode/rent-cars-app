import axios from 'axios';

const BASE_URL = 'https://65202ee6906e276284c42681.mockapi.io/advert';

const requestApi = async () => {
  return await axios.get(BASE_URL);
};

export default requestApi;
