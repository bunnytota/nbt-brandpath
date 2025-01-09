import 'react-native-gesture-handler';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './utils/rootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SnackProvider} from './context/Snackbar';
import {Provider} from 'react-redux';
import store from './Redux/store/store';
import {useSelector} from 'react-redux';
import AppScreen from './Stack/AppScreens';
import AuthScreen from './Stack/AuthScreens';
import PaperSnackbar from './components/PaperSnackbar';
import { AuthProvider } from './context/Authprovider';

function AppNavigator() {
  const {isAuthenticated} = useSelector(state => state.Auth);
  console.log('Auth : ', isAuthenticated);
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
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
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
      <AuthProvider>
        <SnackProvider>
          <AppNavigator />
        </SnackProvider>
        </AuthProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;


