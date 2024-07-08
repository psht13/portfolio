import axios from 'axios';
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
 

export async function getReviews() {
  const result = await axios.get('/reviews');
   console.log(result);
  console.log(result.data)
  return result.data;
}