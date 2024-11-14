import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { partnerrequest } from '../Redux/action/auth'
const Partner = () => {
 
 const dispatch =useDispatch()
 
 const partner = useSelector(state=>state.Auth)

 useEffect(() => {
   
    dispatch(partnerrequest())
  
}, [dispatch])


 
    return (
    <View style={styles.content}>
      <Text style={styles.title}>Partner</Text>
   
      <View>
            {partner && (
              <View style={styles.dataApi}>
                <Text >API Response for user:</Text>
                <View >
                  <Text>{JSON.stringify(partner, null, 2)}</Text>
                </View>
               
              </View>)}
              </View>
   
    </View>
  )
}

export default Partner

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