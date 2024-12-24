import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';

import DispatchScreen from '../screens/DispatchScreen';
import GoodsInScreen from '../screens/GoodsInScreen';

import InventoryControlScreen from '../screens/InventoryControlScreen';
import EscalationScreen from '../screens/EscalationScreen';
import SecurityScreen from '../screens/SecurityScreen';
import VersionScreen from '../screens/VersionScreen';
import {useSelector, useDispatch} from 'react-redux';
import {useContext} from 'react';
import {SnackbarContext} from '../context/Snackbar';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {clearerror, clearmessege} from '../Redux/action/auth';
import Loader from '../components/Loader';
import ReturnsScreen from '../screens/ReturnsScreen';
import HomeScreen from '../screens/HomeScreen';
import LocationList from '../components/LocationList';
import PartnerList from '../components/PartnerList';
import Hoc from '../hoc/Hoc';
import CustomHeader from '../components/CustomHeader';
import {createStackNavigator} from '@react-navigation/stack';

const AppScreen = () => {
  const App = createStackNavigator();

  const {handleSnackbar} = useContext(SnackbarContext);

  const {error, messege, loading} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      handleSnackbar(error);
      dispatch(clearerror());
    } else if (messege) {
      handleSnackbar({messege});
      dispatch(clearmessege());
    }
  }, [error, messege]);

  return (
    <>
      {loading && <Loader />}
      <App.Navigator
        screenOptions={{
          header: () => <CustomHeader />,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}>
        <>
          <App.Screen name="Home" component={Hoc(HomeScreen)} />

          <App.Screen name="Dispatch" component={Hoc(DispatchScreen)} />

          {/* <App.Screen
            name="Dispatch"
            component={Hoc(DispatchScreen)}
            options={({navigation}) => ({
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text>Back</Text>
                </TouchableOpacity>
              ),
              headerBackTitle: 'Back',
              headerBackTitleStyle: {fontSize: 30},
            })}
          /> */}

          <App.Screen name="GoodsIn" component={Hoc(GoodsInScreen)} />

          <App.Screen name="Returns" component={Hoc(ReturnsScreen)} />

          <App.Screen
            name="InventoryControl"
            component={Hoc(InventoryControlScreen)}
          />

          <App.Screen name="Escalation" component={Hoc(EscalationScreen)} />
          <App.Screen name="Security" component={Hoc(SecurityScreen)} />

          {/* <App.Screen
            name="Location"
            component={Location}
            options={{headerShown: false}}
          />

          <App.Screen
            name="Partner"
            component={Partner}
            options={{headerShown: false}}
          /> */}

          <App.Screen name="Version" component={Hoc(VersionScreen)} />

          <App.Screen name="LocationList" component={Hoc(LocationList)} />
        </>
      </App.Navigator>
    </>
  );
};

export default AppScreen;

const styles = StyleSheet.create({});

// import React, {useEffect} from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import {useSnackbar} from '../context/SnackbarContext';
// import {
//   clearError as clearAuthError,
//   clearMessage as clearAuthMessage,
// } from '../actions/auth';
// import {
//   clearError as clearGlobalError,
//   clearMessage as clearGlobalMessage,
// } from '../actions/global';

// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

// import withUserInfo from '../hoc/withUserInfo';
// // Screens
// import HomeScreen from '../screens/HomeScreen';
// // import DispatchScreen from '../screens/Dispatch/DispatchScreen';
// // import GoodsInScreen from '../screens/GoodsIn/GoodsInScreen';
// // import ReturnsScreen from '../screens/Return/ReturnsScreen';
// // import InventoryControlScreen from '../screens/Inventory/InventoryControlScreen';
// // import EscalationScreen from '../screens/Esclation/EscalationScreen';
// // import SecurityScreen from '../screens/Security/SecurityScreen';
// // import Spinner from 'react-native-loading-spinner-overlay';
// import CustomHeader from '../components/CustomHeader';
// // import ScanDetailScreen from '../screens/ScanDetailScreen';

// // import DispatchDetailScreen from '../screens/Dispatch/DispatchDetailScreen';
// // import PaperlessDispatchScreen from '../screens/Dispatch/PaperlessDispatchScreen';
// // import PaperlessPickScreen from '../screens/Dispatch/PaperlessPickScreen';
// // import PickScreen from '../screens/Dispatch/PickScreen';

// // import DockToStockScreen from '../screens/GoodsIn/DockToStockScreen';
// // import CrossDockScreen from '../screens/GoodsIn/CrossDockScreen';
// // import GoogleGoodsInScreen from '../screens/GoodsIn/GoogleGoodsInScreen';
// // import StockMoveScreen from '../screens/Inventory/StockMoveScreen';
// // import StockTakeScreen from '../screens/Inventory/StockTakeScreen';
// // import ItemInformationScreen from '../screens/Inventory/ItemInformationScreen';
// // import SecurityCheckScreen from '../screens/Inventory/SecurityCheckScreen';
// // import ReplenishmentScreen from '../screens/Inventory/ReplenishmentScreen';
// // import LuxotticaScreen from '../screens/Return/Luxottica/LuxotticaScreen';
// // import RTSScreen from '../screens/Return/RTSScreen';
// // import RMAScreen from '../screens/Return/Luxottica/RMAScreen';
// // import NewLabelScreen from '../screens/Esclation/NewLabelScreen';
// // import RePrintLabelScreen from '../screens/Esclation/RePrintLabelScreen';
// // import IntermediateLabelScreen from '../screens/Esclation/IntermediateLabelScreen';
// // import StockLabelScreen from '../screens/Return/Luxottica/StockLabelScreen';
// // import RTVScreen from '../screens/Return/Luxottica/RTVScreen';
// import {BackHandler} from 'react-native';
// // import {goBack} from '../actions/global';
// import {useNavigation} from '@react-navigation/native';
// // import VersioningScreen from '../screens/VersioningScreen';
// // import {resetDockToStock} from '../actions/goodsIn';

// const AppStack = createStackNavigator();

// const AppStackScreen = ({}) => {
//   return (
//     <>
//       <AppStack.Navigator
//         screenOptions={{
//           header: () => <CustomHeader />,
//           gestureEnabled: false,
//           headerStyle: {
//             elevation: 0,
//             shadowOpacity: 0,
//             borderBottomWidth: 0,
//           },
//         }}>
//         <AppStack.Screen
//           name="HomeScreen"
//           component={withUserInfo(HomeScreen)}
//         />
//       </AppStack.Navigator>
//     </>
//   );
// };

// export default AppStackScreen;
