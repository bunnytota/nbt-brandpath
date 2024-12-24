import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
const LocationList = () => {
  const {locationlist} = useSelector(state => state.auth);
  return (
    <View>
      {locationlist?.data ? (
        <Text 
        
        >LocationList: {locationlist.data.map(item => item.locationName)}</Text>
      ) : (
        <Text>Loading locations...</Text>
      )}
    </View>
  );
}

export default LocationList

const styles = StyleSheet.create({

    list:{
        alignItems:'center',
        justifyContent: 'space-between',
     
    }
})

{/*import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const LocationList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const {locationlist} = useSelector(state => state.auth);

  const handleLocationPress = (location) => {
    setSelectedLocation(location);
    setModalVisible(true);
  };

  return (
    <View style={styles.list}>
      {locationlist?.data ? (
        locationlist.data.map(item => (
          <Pressable 
            key={item.id}
            onPress={() => handleLocationPress(item)}
          >
            <Text>{item.locationName}</Text>
          </Pressable>
        ))
      ) : (
        <Text>Loading locations...</Text>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {selectedLocation?.locationName}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default LocationList

const styles = StyleSheet.create({
  list:{
    flex:1,
    marginTop: 100,
    alignItems:'center',
    justifyContent: 'space-between',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})*/}