
const initialState = {
  user: null,
  error: null,
   screen: null,
  isAuthenticated: false,
  userstate:'',
  // message: null,
  successmessege: null,

};


const Auth = (state = initialState, action) => {

 
  switch (action.type) {
   
    case 'LOGIN_SUCCESSFUL':
      
    console.log('API response2:', action.payload.data);
     console.log('API response1:' , action.payload.successmessege)
    
    return { 
        ...state, 
        screen:  action.payload.data.buttons ,
        user:    action.payload.data.result,                      
        isAuthenticated:true,
        error: null,
        // messege: 'Login Success'
        successmessege: action.payload.successmessege
      };


    case 'LOGIN_FAIL':
     
    
    console.log('apiError:', action.payload.error);

    return { 
        ...state, 
        user: null, 
        screen: null,
        isAuthenticated:false,
        // messege: null,
        error: action.payload.error,
        successmessege: null
        
      };
    case 'SET_VALUE':
      return { ...state, name: action.payload };
    case 'SET_VALUE2':
      return { ...state, password: action.payload };
        default:
      return state;
  }
};

export default Auth;
