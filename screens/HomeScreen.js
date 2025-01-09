import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../components/Button';

import FontAwesome from 'react-native-vector-icons/FontAwesome5';

// import { locationrequest, partnerrequest } from '../Redux/action/auth';

import { connect } from 'react-redux';

import PropTypes from 'prop-types'



import { logoutrequest } from '../Redux/action/auth';


const windowHeight = Dimensions.get('window').height;
const HomeScreen = ({ navigation, Auth: { user, screen }, logoutrequest }) => {
  // const { user, screen } = useSelector(state => state.auth);
  // const dispatch = useDispatch();

  const handlenavigation = screen => navigation.navigate(screen);

  console.log(screen);

  // handlesubmitone = () => {
  //   navigation.navigate('Location');
  //   dispatch(locationrequest());
  // };

  // handlesubmittwo = () => {
  //   navigation.navigate('Partner');
  //   dispatch(partnerrequest());
  // };

  return (
    <ScrollView style={styles.formContainer}>
      <View style={styles.menuContainer}>
        {screen?.length > 0 ? (
          <View style={styles.menuGrid}>
            {screen.map(button => (
              <TouchableOpacity
                onPress={() => handlenavigation(button.navigation)}
                key={button.name}
                style={[
                  styles.menuButton,
                  { backgroundColor: button?.style?.backgroundColor },
                ]}>
                <FontAwesome
                  name={button.iconName}
                  size={24}
                  color="#fff"
                  style={styles.verticalIcon}
                  solid={false}
                />
                <Text style={styles.buttonText}>{button.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <Text>No buttons available</Text>
        )}
      </View>
      <View style={styles.buttonmarrgen} />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate('Version')}
          iconName="info-circle"
          value="Version"
        />
        <Button
          onPress={() => (logoutrequest(user?.username))}
          iconName="sign-out-alt"
          value="Logout"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  logo: {
    marginVertical: '2%',
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: '18 Khebrat Musamim Regular',
  },
  roundContainer: {
    width: '90%',
    height: 55,
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 30,
    elevation: 2,
  },
  roundedContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  roundedFont: {
    margin: 2,
    fontWeight: 'bold',
  },
  textColor: {
    color: 'red',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
  },
  nameBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuContainer: {
    marginVertical: 7,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  menuButton: {
    height: windowHeight * 0.1,
    width: '47%',
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  verticalIcon: {
    marginBottom: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    fontWeight: '500',
  },
  bold: {
    fontWeight: 'bold',
  },

  buttonmarrgen: {
    height: windowHeight * 0.14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 43,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#1aa89a',
    borderRadius: 24,
  },
  inputIcon: {
    height: 37,
    width: 37,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 3,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  placeholder: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    fontSize: 10,
  },
  inputError: {
    borderColor: 'red',
  },
});

HomeScreen.propTypes = {

  Auth: PropTypes.object.isRequired,
  logoutrequest: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  Auth: state.Auth,
});

export default connect(
  mapStateToProps,
  { logoutrequest },
)(HomeScreen)
