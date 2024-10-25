import { StyleSheet, Text, View, } from 'react-native'

import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react'
import { Platform } from 'react-native'

// Import navigation components
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Changepin from './screens/Changepin'
import Sharedlayout from './components/Sharedlayout'
import Loginscreen from './screens/Loginscreen'
import { SafeAreaView } from 'react-native-safe-area-context'


const Stack = createNativeStackNavigator()

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  return (
    
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Loginscreen} options={{headerShown:false}} />
        <Stack.Screen name="Change" component={Changepin} options={{headerShown:false}} />
      </Stack.Navigator>
      <Sharedlayout />    
    </NavigationContainer>
    
    
  )
}

export default App

const styles = StyleSheet.create({


})