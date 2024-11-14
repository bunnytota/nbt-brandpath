
import axios from 'axios';
import { Baseurl, Header, AzureName } from '../utils/apiconfig'


const api = axios.create({
  baseURL: Baseurl(),
  headers: {
    'Content-Type': 'application/json',
    Authorization: Header(),
  },
});


api.interceptors.request.use(config => {
  config.headers['AzureName'] = AzureName;
  return config;
});



export default api;
