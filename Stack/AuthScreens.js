import React, { useEffect } from 'react';
import LoginScreen from '../screens/LoginScreen';
import ChangePinScreen from '../screens/ChangePinScreen';
import AzureloginScreen from '../screens/AzureloginScreen'
import { useSelector, useDispatch } from 'react-redux';
import { useContext } from 'react';
import { SnackbarContext } from '../context/Snackbar';
import Loader from '../components/Loader';
import { clearerror, clearmessege } from '../Redux/action/auth';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
const AuthScreen = ({ Auth: { error, messege, loading }, clearmessege, clearerror }) => {
  const Auth = createStackNavigator();

  const { handleSnackbar } = useContext(SnackbarContext);

  // const { error, messege, loading } = useSelector(state => state.Auth);

  // const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      handleSnackbar({ error });
      clearerror();
    } else if (messege) {
      handleSnackbar({ messege });
      clearmessege();
    }
  }, [error, messege]);

  return (
    <>
      {loading && <Loader />}

      <Auth.Navigator>

        <Auth.Screen
          name="AzureloginScreen"
          component={AzureloginScreen}
          options={{ headerShown: false }}
        />

        <Auth.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Auth.Screen
          name="Change"
          component={ChangePinScreen}
          options={{ headerShown: false }}
        />
      </Auth.Navigator>
    </>
  );
};

AuthScreen.propTypes = {
  Auth: PropTypes.object.isRequired,
  clearerror: PropTypes.func.isRequired,
  clearmessege: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  Auth: state.Auth
})

export default connect(mapStateToProps, { clearmessege, clearerror })(AuthScreen)

// export default AuthScreen;
