import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
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