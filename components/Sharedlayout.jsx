import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Sharedlayout = () => {
  return (
    <View style={styles.shlayout}>
      <Text >@Powered By BrandHub</Text>
    </View>
  )
}

export default Sharedlayout

const styles = StyleSheet.create({

  shlayout:{
    
    
    alignItems:'center',
    // backgroundColor: '#dcdbdb',
    justifyContent:'center',
    
    
   
  }
})