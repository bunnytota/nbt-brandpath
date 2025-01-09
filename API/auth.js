// import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../Services/apiService';
import { useContext } from 'react';
import { useAuth } from '../context/Authprovider';
import { useSelector } from 'react-redux';
import store from '../Redux/store/store';







export const login = async (username, pin) => {
  // Get the cleanUsername from localStorage or AsyncStorage
  // const cleanUsername = await AsyncStorage.getItem('cleanUsername');
  // const cleanUsername = useSelector(state => state.Auth)
  const state = store.getState();
  const cleanUsername = state?.Auth?.cleanUsername;
  console.log("API login - Current cleanUsername in Redux:", cleanUsername);
  console.log("cleanUsername getstate:", `'${cleanUsername}'`, typeof (cleanUsername))
  return api.post('mobile/LoginPin', {
    username,
    pin,
    azureUserName: cleanUsername
  });
};

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

  });

export const partnerlist = () =>
  api.get('mobile/Partnerlist', {

  });

export const setuserstate = (username, stationID, partnerKey) =>
  api.post('mobile/SetDispEnv', {
    username,
    stationID,
    partnerKey,
    azureUserName: 'ayesha.zahid'
  });
