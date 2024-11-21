import { StyleSheet } from 'react-native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react'
import { Platform } from 'react-native'
// import Api from './components/Api'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Sharedlayout from './components/Sharedlayout'
import { SnackProvider } from './context/Snackbar'
import { Provider } from 'react-redux'
import store from './Redux/store/store'
import { useSelector } from 'react-redux'
import AppScreen from './Stack/AppScreens'
import AuthScreen from './Stack/AuthScreens'
import  Snackbarcomp  from './components/Snackbar';
import Papersnackbar from './components/Papersnackbar'
const Stack = createNativeStackNavigator()

// Create a separate component for the navigation logic
function AppNavigator() {
   const { isAuthenticated } = useSelector((state:any) => state.Auth);
  console.log("Auth : ", isAuthenticated)
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
         {
         
         isAuthenticated ? (

          <>

          <AppScreen/>
          
          </>
        ) : (
          <>
            <AuthScreen/>           
          
          </>
        )} 
     <Papersnackbar/>
      <Sharedlayout />
    </NavigationContainer>
  );
}


const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SnackProvider>
          <AppNavigator  />
        </SnackProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  
  
});