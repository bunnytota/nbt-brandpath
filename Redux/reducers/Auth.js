
const initialState = {
  user: null,
  error: null,
   screen: null,
  isAuthenticated: false,
  userstate:'',
 
};


const Auth = (state = initialState, action) => {

 
  switch (action.type) {
   
    case 'LOGIN_SUCCESSFUL':
      
    console.log('API response2:', action.payload.data);
    return { 
        ...state, 
        screen:  action.payload.data.buttons ,
        user:    action.payload.data.result,                      
        isAuthenticated:true,
        error: null,
        
      };


    case 'LOGIN_FAIL':
     
    
    console.log('apiError:', action.payload.error);

    return { 
        ...state, 
        user: null, 
        screen: null,
        isAuthenticated:false,
        error: action.payload.error,
       
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
