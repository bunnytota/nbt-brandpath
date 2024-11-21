import { StyleSheet, Text, View } from 'react-native'
import React ,{useEffect} from 'react'
import Loginscreen from '../screens/Loginscreen'
import Changepin from '../screens/Changepin'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'
import { useContext } from 'react'
import { SnackbarContext } from '../context/Snackbar'

const AuthScreen = () => {

  const Auth = createNativeStackNavigator()

  const {handleSnackbar}  = useContext(SnackbarContext)

  const error= useSelector((state)=>state.Auth)
  
  useEffect(()=>{
    console.log('Auth state changed:', error);
    if(error?.error) {
      console.log('Showing error:', error);
      handleSnackbar(error)
    }
  },[error])
  


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