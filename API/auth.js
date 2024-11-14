import axios from '../Services/apiservice';


export const login = (username, pin) =>
  axios.post('mobile/LoginPin', {
    username,
    pin,
    azureUserName: username
  });

