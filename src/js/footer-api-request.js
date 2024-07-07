import AXIOS from 'axios';

const axios = AXIOS.create({
  baseURL: 'https://portfolio-js.b.goit.study/api',
  timeout: 1000,
});

const endPoint = '/requests';

export function doPostRequest(email, comment) {
  axios.post(endPoint);
}
