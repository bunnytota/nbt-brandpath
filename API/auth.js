import axios from '../Services/apiService';

export const login = (username, pin) =>
  axios.post('mobile/LoginPin', {
    username,
    pin,
    azureUserName: 'ayesha.zahid',
  });

export const changepin = (username, pin, newpin) =>
  axios.post('mobile/ChangePin', {
    username,
    newpin,
    pin,
    azureUserName: 'ayesha.zahid',
  });

export const logout = username =>
  axios.post('mobile/Logout', {
    username,
    azureUserName: 'ayesha.zahid',
  });

export const userstate = username =>
  axios.get('mobile/GetUserState', {
    params: {
      username,
    },
  });

export const locationlist = () =>
  axios.get('mobile/Locationlist', {
    // username,
    // azureUserName: 'ayesha.zahid',
  });

export const partnerlist = () =>
  axios.get('mobile/Parnterlist', {
    // username,
    // azureUserName: 'ayesha.zahid',
  });
