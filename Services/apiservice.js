import axios from 'axios';
import { Baseurl, Header } from '../utils/apiConfig';


const api = axios.create({
  baseURL: Baseurl(),
  headers: {
    'Content-Type': 'application/json',
    Authorization: Header(),
  },
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default api;
