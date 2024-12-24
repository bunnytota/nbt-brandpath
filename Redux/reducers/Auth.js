import {locationlist, partnerlist, userstate} from '../../API/auth';

const initialState = {
  user: null,
  error: null,
  screen: null,
  isAuthenticated: false,
  userstate: '',
  loading: false,
  messege: null,
  userstate: null,
  locationlist: null,
  partnerlist: null,
  // userstateStationid: null,
  // userstatePartnername: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESSFUL':
      console.log('LOGIN_SUCCESSFUL : ', action.payload);
      return {
        ...state,
        screen: action.payload.data.buttons,
        user: action.payload.data.result,
        isAuthenticated: true,
        error: null,

        messege: action.payload.messege,
      };

    case 'LOGIN_FAIL':
      return {
        ...state,
        user: null,
        screen: null,
        isAuthenticated: false,
        error: action.payload.error,
        messege: null,
      };

    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };

    case 'CLEAR_MESSEGE':
      return {
        ...state,
        messege: null,
      };

    case 'LOADING':
      return {
        ...state,

        loading: action.payload,
      };

    case 'CHANGE_PIN_SUCCESSFUL':
      return {
        ...state,
        data: action.payload.data,
        messege: action.payload.messege,
      };

    case 'CHANGE_PIN_FAIL':
      console.log('Change Pin Failed: ', action.payload.error);
      return {
        ...state,
        user: null,
        screen: null,
        isAuthenticated: false,
        error: action.payload.error,
        messege: null,
      };

    case 'LOG_OUT_SUCCESSFUL':
      console.log('Logout Successful ', action.payload.messege);
      return {
        ...state,
        user: null,
        screen: null,
        error: null,
        isAuthenticated: false,
        messege: action.payload.messege,
      };

    case 'LOG_OUT_FAILS': {
      console.log('Logout Successful ', action.payload.error);

      return {...state, error: action.payload.error};
    }

    case 'USER_STATE_SUCCESSFUL':
      console.log('UserStateStationid Successful : ', action.payload.stationid);
      // console.log(
      //   'UserStatePartnerName Successful : ',
      //   action.payload.partnerName);
      console.log('UserStateSuccessful : ', action.payload);
      return {
        ...state,
        userstate: action.payload,
        // userstateStationid: action.payload.stationid,
        // userstatePartnername: action.payload.partnerName,
      };

    case 'USER_STATE_FAILS':
      console.log('UserState error : ', action.payload.error);

      return {
        ...state,
        userstate: action.payload.error,
      };

    case 'LOCATION_LIST_SUCCESSFUL':
      console.log('LOCATION_LIST_SUCCESSFUL : ', action.payload);
      return {
        ...state,
        locationlist: action.payload,
      };

    case 'LOCATION_LIST_FAILS':
      console.log('LOCATION_LIST_FAILS error : ', action.payload.error);
      return {
        ...state,
        locationlist: action.payload.error,
      };

    case 'PARTNER_LIST_SUCCESSFUL':
      console.log('PARTNER_LIST_SUCCESSFUL : ', action.payload);
      return {
        ...state,
        partnerlist: action.payload,
      };

    case 'PARTNER_LIST_FAILS':
      console.log('PARTNER_LIST_FAILS error : ', action.payload.error);
      return {
        ...state,
        partnerlist: action.payload.error,
      };

    default:
      return state;
  }
};

export default auth;
