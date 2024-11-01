export const fetchapilogin = (name,password) => ({
    type: 'FETCH_API_LOGIN',
    name,
    password
  });
  
  export const fetchapisuccessful = (data) => ({
    type: 'FETCH_API_SUCCESS',
    payload: data
  });
  
  export const fetchapifail = (error) => ({
    type: 'FETCH_API_FAIL',
    payload: error
  });
  
  export const setValue = (name) => ({
    type: 'SET_VALUE',
    payload: name
  });
  
  export const setValue2 = (password) => ({
    type: 'SET_VALUE2',
    payload: password
  });