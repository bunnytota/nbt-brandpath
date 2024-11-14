import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomePage from '../screens/HomePage'
import  Dispatch  from '../screens/Dispatch'
import Goodsin from '../screens/Goodsin'
import Returns from '../screens/Returns'
import Inventorycontrol from '../screens/Inventorycontrol'
import Escalation from '../screens/Escalation'
import Security from '../screens/Security'
import Location from '../screens/Location'
import Partner from '../screens/Partner'


import { createNativeStackNavigator } from '@react-navigation/native-stack'



const AppScreen = () => {
  
  const App = createNativeStackNavigator()
  return (
   
    <>
    <App.Navigator>

    <>
    <App.Screen 
              name="Home" 
              component={HomePage}  
              options={{headerShown: false}}
            />
         
         <App.Screen 
              name="Dispatch" 
              component={Dispatch}  
              options={{headerShown: false}}
            />

<App.Screen 
              name="GoodsIn" 
              component={Goodsin}  
              options={{headerShown: false}}
            />

<App.Screen 
              name="Returns" 
              component={Returns}  
              options={{headerShown: false}}
            />

<App.Screen 
              name="InventoryControl" 
              component={Inventorycontrol}  
              options={{headerShown: false}}
            />

<App.Screen 
              name="Escalation" 
              component={Escalation}  
              options={{headerShown: false}}
            />
<App.Screen 
              name="Security" 
              component={Security}  
              options={{headerShown: false}}
            /> 

<App.Screen 
              name="Location" 
              component={Location}  
              options={{headerShown: false}}
            />


<App.Screen 
              name="Partner" 
              component={Partner}  
              options={{headerShown: false}}
            />



          </>
    
    </App.Navigator>
    </>
  )
}

export default AppScreen

const styles = StyleSheet.create({})