
const initialState = {
  user: null,
  error: null,
   screen: [],
  isAuthenticated: false,
  userstate:'',
 
};



const Auth = (state = initialState, action) => {

 
  switch (action.type) {
   
    case 'FETCH_API_SUCCESS':
      return { 
        ...state, 
        user: action.payload.data.result,
        screen:  action.payload.data.buttons ,
                              
        isAuthenticated:true,
        error: null,
        
      };
    case 'FETCH_API_FAIL':
      return { 
        ...state, 
        user: null, 
        screen: null,
        isAuthenticated:false,
        error: action.payload,
       
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
