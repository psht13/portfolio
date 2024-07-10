import axios, { Axios } from 'axios';
// import axios from 'axios';
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function getReviews() {
  // const searchParams = new URLSearchParams({
  // key: API_KEY,
  // q: image,
  // image_type: "photo",
  // orientation: "horizontal",
  // safesearch: "true",
  // });
  // console.log(searchParams.toString());
  const result = await axios.get('/reviews');
  return result.data;
}

// import Axios from 'axios';

// const axios = Axios.create({
//   baseURL: 'https://portfolio-js.b.goit.study/api',
//   timeout: 1000,
// });

// // endpoint
// const END_POINT = '/reviews';

// export async function getReviews() {
//   const result = await axios.get(END_POINT);
//   return result.data;
// }
