import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Textfield = ({ value, onChangeText, onBlur, placeholder, iconName, error }) => {
  return (
    <View style={[styles.inputContainer, error && styles.inputError]}>
      <LinearGradient colors={['#0175b2', '#4b3d91']} style={styles.inputIcon}>
        <Icon name={iconName} size={27} color="#ffff" />
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
    marginBottom: 66,
    width: 240,
    backgroundColor: '#f0f0f0',
    borderRadius: 24,
    height: 48,
  },
  inputIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
  },
  input: {
    flex: 1,
    paddingBottom: 8,
    fontSize: 18,
    
    marginLeft: 4,
    width: '80%',
  },
  placeholder: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    
    fontSize: 10,
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