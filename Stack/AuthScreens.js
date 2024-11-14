import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Loginscreen from '../screens/Loginscreen'
import Changepin from '../screens/Changepin'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const AuthScreen = () => {

  const Auth = createNativeStackNavigator()
  return (
   <> 
   <Auth.Navigator>
   <Auth.Screen 
    name="Login" 
    component={Loginscreen} 
    options={{headerShown: false}} 
  />
  <Auth.Screen 
    name="Change" 
    component={Changepin} 
    options={{headerShown: false}} 
  /></Auth.Navigator>
  </>
  )
}

export default AuthScreen

const styles = StyleSheet.create({})