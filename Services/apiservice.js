
import axios from 'axios';
import { Baseurl, Header} from '../utils/apiconfig'

  const api = axios.create({
    
    baseURL: Baseurl(),
    headers: {
      'Content-Type': 'application/json',
         Authorization: Header(),
    },
  })  

  axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    console.log('Axios Response:', response);
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // BASE_URL=https://kv3hbb5j-44392.uks1.devtunnels.ms
//AUTH_USERNAME=mw_hub
//AUTH_PASSWORD=y0mh4Dqe0eMk

     console.log('Axios Response:',response.error.data)
    return Promise.reject(error);
  
  }
    
);










export default api;
