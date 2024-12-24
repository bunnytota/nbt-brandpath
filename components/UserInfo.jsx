import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Clock from './Clock'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { useSelector } from 'react-redux'




const FormContainer = () => {

  const {user, screen, error, userstate} = useSelector(state => state.auth);

  return (
   
   
    <View style={styles.nameBar}>
      <Text style={styles.text}>
        <FontAwesome name="user" size={15} color="#23c4b4" solid={true} />{' '}
        Hello,{' '}
        <Text style={styles.bold}>
          {user?.username.charAt(0).toUpperCase() + user.username.slice(1)}
        </Text>
      </Text>

      <Text>
        <FontAwesome name="clock" size={15} color="#23c4b4" solid={false} />
        <Text> Time:</Text>
        <Clock />
      </Text>
    </View>
  
  
  )
}

export default FormContainer

const styles = StyleSheet.create({
  nameBar: {
    marginTop: 2,
    marginBottom: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 5
  },
  text: {
    color: 'black',
    fontWeight: '500',
  },
  bold: {
    fontWeight: 'bold',
  },
})