import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {SnackbarContext}  from '../context/Snackbar'
import { useContext } from 'react';
const Snackbar = () => {
  const {show, setShow, message} = useContext(SnackbarContext)
  
  // if (!show) return null;

  return (
    <View style={styles.snackbarcontainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.text1}>Error</Text>
        <TouchableOpacity onPress={() => setShow(false)}>
          <FontAwesome name="times" size={17} color="white"/>
        </TouchableOpacity>
      </View>
      <Text style={styles.text2}>
        {message}
      </Text>
    </View>
  )
}

export default Snackbar

const styles = StyleSheet.create({
  snackbarcontainer: {
    backgroundColor: '#333',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    elevation: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  text1:{
    color:'white'
  },
  text2:{
    color:'white'
  },
  text3:{
    color:'purple'
  }
})