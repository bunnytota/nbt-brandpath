
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
     console.log('Axios Response:',response.error.data)
    return Promise.reject(error);
  
  }
    
);










export default api;
