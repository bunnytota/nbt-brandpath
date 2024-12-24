import React from 'react';
import {
  Text,
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';


const LocationModal = ({ visible, onClose, locationList, onSelect }) => {
  
 
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.headerTitle}>Select Location</Text>
            <TouchableOpacity onPress={onClose}>
              <FontAwesome name="times" size={20} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.searchContainer}>
            <FontAwesome name="search" size={15} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search location..."
              placeholderTextColor="#999"
            />
          </View>

          <ScrollView 
            style={styles.locationList}
            showsVerticalScrollIndicator={false}
          >
            {locationList?.data?.map(item => (
              <TouchableOpacity
                key={item.stationID}
                style={styles.locationItem}
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text style={styles.locationText}>{item.locationName}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
    marginHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
  },
  searchIcon: {
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    padding: 8,
    fontSize: 16,
  },
  locationList: {
    maxHeight: '70%',
    paddingHorizontal: 15,
  },
  locationItem: {
    paddingVertical: 12,
  },
  locationText: {
    fontSize: 16,
  },
});

export default LocationModal;
