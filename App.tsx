import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './utils/rootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Sharedlayout from './components/SharedLayout';
import { SnackProvider } from './context/Snackbar';
import { Provider } from 'react-redux';
import store from './Redux/store/store';
import { useSelector } from 'react-redux';
import AppScreen from './Stack/AppScreens';
import AuthScreen from './Stack/AuthScreens';

import PaperSnackbar from './components/PaperSnackbar';
import CustomHeader from './components/CustomHeader';
// import {fetch} from 'react-native-ssl-pinning';
// import base64 from 'react-native-base64';


// const authToken = 'Basic ' + base64.encode(`mw_hub:y0mh4Dqe0eMk`);

// fetch('https://kv3hbb5j-5001.uks1.devtunnels.ms/mobile/Loginpin', {
// 	method: "POST" ,
//   body: JSON.stringify({
//     username: 'ayesha.zahid', // Example username
//     pin: '12345', // Example pin
//     azureUserName: "ayesha.zahid" // Fixed string value
//   }),
//   timeoutInterval: 30000, 
// 	// your certificates array (needed only in android) ios will pick it automatically
// 	sslPinning: {
// 		certs: ['dc1ca'] // your certificates name (without extension), for example cert1.cer, cert2.cer
// 	},
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     "Access-Control-Allow-Origin": "*",
//     'Authorization': authToken,
//   }

// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch(err => {
//   console.log('Error:', err);
// });




function AppNavigator() {


  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log("Auth : ", isAuthenticated);
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);





  return (
    <NavigationContainer ref={navigationRef} >

      {isAuthenticated ? (
        <>
          <AppScreen />
        </>
      ) : (
        <>
          <AuthScreen />
        </>
      )}
      <PaperSnackbar />
      {/* <Sharedlayout /> */}
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SnackProvider>
          <AppNavigator />
        </SnackProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({

});