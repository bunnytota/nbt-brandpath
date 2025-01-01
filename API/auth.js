import api from '../Services/apiService';

export const login = (username, pin) =>
  api.post('mobile/LoginPin', {
    username,
    pin,
    azureUserName: 'ayesha.zahid',
  });

export const changepin = (username, pin, newpin) =>
  api.post('mobile/ChangePin', {
    username,
    newpin,
    pin,
    azureUserName: 'ayesha.zahid',
  });

export const logout = username =>
  api.post('mobile/Logout', {
    username,
    azureUserName: 'ayesha.zahid',
  });

export const userstate = username =>
  api.get('mobile/GetUserState', {
    params: {
      username,
    },
  });

export const locationlist = () =>
  api.get('mobile/Locationlist', {
    // username,
    // azureUserName: 'ayesha.zahid',
  });

export const partnerlist = () =>
  api.get('mobile/Partnerlist', {
    // username,
    // azureUserName: 'ayesha.zahid',
  });

export const setuserstate = (username, stationID, partnerKey) =>
  api.post('mobile/SetDispEnv', {
    username,
    stationID,
    partnerKey,
    azureUserName: 'ayesha.zahid'
  });
