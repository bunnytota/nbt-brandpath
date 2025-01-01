import axios from 'axios';
import {Baseurl, Header} from '../utils/apiConfig';
// import sslPinning from 'react-native-ssl-pinning';

const api = axios.create({
  baseURL: Baseurl(),
  sslPinning: {
    certs: ['dc1ca'],
  },
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

// import axios from 'axios';
// import {Baseurl, Header} from '../utils/apiConfig';
// // import {fetch} from 'react-native-ssl-pinning';

// // Create fetch instance with SSL pinning
// const fetchConfig = {
//   baseURL: Baseurl(),
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization: Header(),
//   },
//   // sslPinning: {
//   //   certs: ['dc1ca'], // Your certificates
//   // },
// };

// // Use the sslPinning module's fetch method
// const api = {
//   get: async (url, config = {}) => {
//     return await fetch('get', `${Baseurl()}${url}`, {
//       ...fetchConfig,
//       ...config,
//     });
//   },
//   post: async (url, data, config = {}) => {
//     return await fetch('post', `${Baseurl()}${url}`, {
//       ...fetchConfig,
//       ...config,
//       body: JSON.stringify(data),
//     });
//   },
//   // Add other methods as needed (put, delete, etc.)
// };

// export default api;
