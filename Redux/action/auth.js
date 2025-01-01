//LOGIN
export const loginrequest = (name, password) => ({
  type: 'LOGIN_REQUEST',
  name,
  password,
});

export const loginsuccessful = (data, messege) => ({
  type: 'LOGIN_SUCCESSFUL',
  payload: { data, messege },
});

export const loginfail = error => ({
  type: 'LOGIN_FAIL',
  payload: error,
});

//CHANGE PIN
export const changepinrequest = (name, oldpassword, newpassword) => ({
  type: 'CHANGE_PIN_REQUEST',
  name,
  newpassword,
  oldpassword,
});

export const changepinsuccessful = (data, messege) => ({
  type: 'CHANGE_PIN_SUCCESSFUL',
  payload: {
    data,
    messege,
  },
});

export const changepinfails = error => ({
  type: 'CHANGE_PIN_FAIL',
  payload: error,
});

//LOGOUT
export const logoutrequest = username => ({
  type: 'LOG_OUT_REQUEST',
  username,
});
export const logoutsuccessful = messege => ({
  type: 'LOG_OUT_SUCCESSFUL',

  payload: {
    messege,
  },
});

export const logoutfails = error => ({
  type: 'LOG_OUT_FAIL',
  payload: error,
});

// CLEAN
export const clearerror = () => ({
  type: 'CLEAR_ERROR',
});

export const clearmessege = () => ({
  type: 'CLEAR_MESSEGE',
});

//LOADER
export const setloading = loading => ({
  type: 'LOADING',
  payload: loading,
});

export const userstaterequest = name => ({
  type: 'USER_STATE_REQUEST',
  name,
});

export const userstatesuccessful = data => ({
  type: 'USER_STATE_SUCCESSFUL',
  payload: data,
});

export const userstatefails = error => ({
  type: 'USER_STATE_FAILS',
  payload: error,
});

export const locationlistrequest = () => ({
  type: 'LOCATION_LIST_REQUEST',
});

export const locationlistsuccessful = data => ({
  type: 'LOCATION_LIST_SUCCESSFUL',
  payload: data,
});

export const locationlistfails = error => ({
  type: 'LOCATION_LIST_FAILS',
  payload: error,
});

export const partnerlistrequest = () => ({
  type: 'PARTNER_LIST_REQUEST',
});

export const partnerlistsuccessful = data => ({
  type: 'PARTNER_LIST_SUCCESSFUL',
  payload: data,
});

export const partnerlistfails = error => ({
  type: 'PARTNER_LIST_FAILS',
  payload: error,
});

// export const setuserstaterequest = (name, stationID, partnerKey) => ({
//   type: 'SET_USER_STATE_REQUEST',
//   name,
//   stationID,
//   partnerKey,
// });

// export const setuserstatesuccessful = () => ({
//   type: 'SET_USER_STATE_SUCCESSFUL',
// });

// export const setuserstatefails = error => ({
//   type: 'SET_USER_STATE_FAILS',
//   error,
// });

export const setuserstaterequest = (name, stationID, partnerKey) => {

  console.log('Action: SET_USER_STATE_REQUEST');
  return {
    type: 'SET_USER_STATE_REQUEST',
    name,
    stationID,
    partnerKey,
  }
};



export const setuserstatesuccessful = (setuserstatemessege) => {
  console.log('Action: SET_USER_STATE_SUCCESSFUL');
  return {
    type: 'SET_USER_STATE_SUCCESSFUL',
    payload: setuserstatemessege
  };
};

export const setuserstatefails = error => {
  console.log('Action: SET_USER_STATE_FAILS', { error });
  return {
    type: 'SET_USER_STATE_FAILS',
    payload: error,
  };
};
