import { StyleSheet, Text, View, } from 'react-native'

import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react'
import { Platform } from 'react-native'
import Api from './components/Api'
// Import navigation components
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Changepin from './screens/Changepin'
import Sharedlayout from './components/Sharedlayout'
import Loginscreen from './screens/Loginscreen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import store from './Redux/store/store'
import HomePage from './screens/HomePage'

const Stack = createNativeStackNavigator()
//const isSignedin = false
const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  return (
    
    <Provider store ={store}>
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="Api" component={Api} options={{headerShown:false}} /> */}
         
         {/* { isSignedin ?(<>
           <Stack.Screen name="Home" component={HomePage}  options={{headerShown:false}}/>
         </>) 
         
         :
         
         (<>
         <Stack.Screen name="Login" component={Loginscreen} options={{headerShown:false}} />
         <Stack.Screen name="Change" component={Changepin} options={{headerShown:false}} /> 
         </>)
      } */}

         <Stack.Screen name="Login" component={Loginscreen} options={{headerShown:false}} />
         <Stack.Screen name="Change" component={Changepin} options={{headerShown:false}} /> 
         <Stack.Screen name="Home" component={HomePage}  options={{headerShown:false}}/>
         <Stack.Screen name="Api" component={Api} options={{headerShown:false}} />
      </Stack.Navigator>
      <Sharedlayout />    
    </NavigationContainer>
    
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({


})