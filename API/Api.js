// api.js - Create a separate API configuration file
import axios from 'axios';
import base64 from 'react-native-base64';

const API = axios.create({
  baseURL: 'https://kv3hbb5j-44392.uks1.devtunnels.ms',
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

API.interceptors.request.use(
    config => {
      const staticUsername = "mw_hub";
      const staticPassword = "y0mh4Dqe0eMk";
      const authToken = 'Basic ' + base64.encode(`${staticUsername}:${staticPassword}`);
      config.headers.Authorization = authToken;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  
  export default API;