import { StyleSheet } from 'react-native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react'
import { Platform } from 'react-native'
// import Api from './components/Api'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Sharedlayout from './components/Sharedlayout'

import { Provider } from 'react-redux'
import store from './Redux/store/store'
import { useSelector } from 'react-redux'
import AppScreen from './Stack/AppScreens'
import AuthScreen from './Stack/AuthScreens'

const Stack = createNativeStackNavigator()

// Create a separate component for the navigation logic
function AppNavigator() {
   const { isAuthenticated } = useSelector((state) => state.Auth);

  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
         {isAuthenticated ? (
          <>

          <AppScreen/>
          
          </>
        ) : (
          <>
            <AuthScreen/>           
          
          </>
        )} 
    
      <Sharedlayout />
    </NavigationContainer>
  );
}

// Main App component that provides the Redux store
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({});