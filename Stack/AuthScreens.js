import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LoginScreen from '../screens/LoginScreen';
import ChangePinScreen from '../screens/ChangePinScreen';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';
import {useContext} from 'react';
import {SnackbarContext} from '../context/Snackbar';
import Loader from '../components/Loader';
import {clearerror, clearmessege} from '../Redux/action/auth';
import {createStackNavigator} from '@react-navigation/stack';
const AuthScreen = () => {
  const Auth = createStackNavigator();

  const {handleSnackbar} = useContext(SnackbarContext);

  const {error, messege, loading} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      handleSnackbar({error});
      dispatch(clearerror());
    } else if (messege) {
      handleSnackbar({messege});
      dispatch(clearmessege());
    }
  }, [error, messege]);

  return (
    <>
      {loading && <Loader />}

      <Auth.Navigator>
        <Auth.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Auth.Screen
          name="Change"
          component={ChangePinScreen}
          options={{headerShown: false}}
        />
      </Auth.Navigator>
    </>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
