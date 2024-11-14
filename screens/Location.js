import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'


import { locationrequest, locationsuccesful } from '../Redux/action/auth';
const Location = () => {

    const dispatch = useDispatch()

    const location = useSelector((state)=>state.Auth)

    useEffect(() => {
   
        dispatch(locationrequest())
      
    }, [dispatch])
    
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Location</Text>


      <View>
            {location && (
              <View style={styles.dataApi}>
                <Text >API Response for user:</Text>
                <View >
                  <Text>{JSON.stringify(location, null, 2)}</Text>
                </View>
               
              </View>)}
              </View>
    </View>
  )
}

export default Location

const styles = StyleSheet.create({

    content: {
        padding: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
      },
      dataApi: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        elevation: 2,
      },


})