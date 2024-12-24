// Search.js
import React from 'react';
import { StyleSheet, TextInput, View,TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Search = ({ 
  placeholder, 
  onChangeText, 
  value 
}) => {
  return (
    <View style={styles.searchContainer}>
      <FontAwesome 
        name="search" 
        size={15} 
        color="#666" 
        style={styles.searchIcon} 
      />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor="#999"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Search;