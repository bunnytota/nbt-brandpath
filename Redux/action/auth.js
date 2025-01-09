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


// export const setCleanUsernameAction = (cleanusername) => ({
//   type: 'SET_CLEAN_USERNAME',
//   payload: cleanusername,
// });

export const setCleanUsernameAction = (cleanUsername) => {
  console.log('Action - setCleanUsernameAction called with:', cleanUsername);
  return {
    type: 'SET_CLEAN_USERNAME',
    payload: cleanUsername,
  };
};