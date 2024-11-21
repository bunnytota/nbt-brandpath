import * as React from 'react';
import { View } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {SnackbarContext}  from '../context/Snackbar'
import { useContext } from 'react';

const Papersnackbar = () => {
  const {show, setShow, error, messege} = useContext(SnackbarContext)
 
 
  
    return (
    <View style={styles.container}>
      <Snackbar
        visible={show}
        onDismiss={() => setShow(false)}
        duration={3000} 
        action={{
          label: 'Close',
          onPress: () => setShow(false),
        }}>
        <View>
          <Text style={styles.Snackbar}>
            <FontAwesome name="times-circle" size={25} color="red" solid={true}/>
          </Text>
          <Text style={styles.text1}>{error}</Text>
          <Text style={styles.text2}>{messege}</Text>
        </View>
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    justifyContent: 'space-between',
  },

  text1:
  {
    marginLeft:40,
    color: 'white',
    
  },
  text2:{
    marginLeft:40,
       color:'white',
  }
,
  Snackbar:{
   position:'absolute',
   top:'20%'
  }
});

export default Papersnackbar;