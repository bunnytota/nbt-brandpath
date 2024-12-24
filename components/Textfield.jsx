import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Textfield = ({ value, onChangeText, onBlur, placeholder, iconName, error }) => {
  return (
    <View style={[styles.inputContainer, error && styles.inputError]}>
      <LinearGradient colors={['#0175b2', '#4b3d91']} style={styles.inputIcon}>
        <Icon name={iconName} size={20} color="#ffff" />
      </LinearGradient>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, styles.placeholder]}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 23,
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 24,
    height: 38,
  },
  inputIcon: {
    height: 33,
    width: 33,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
  
  placeholder: {
    marginLeft: 10,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
    
  },

  changepin: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
  },
});

export default Textfield;