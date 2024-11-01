const initialState = {
  curry: null,
  error: null,
  
  name: '',
  password: '',
  loading: false // Add loading state
};

const curryy = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_API_LOGIN':
      return { ...state, loading: true, error: null };
    case 'FETCH_API_SUCCESS':
      return { 
        ...state, 
        curry: action.payload, 
        error: null,
        loading: false 
      };
    case 'FETCH_API_FAIL':
      return { 
        ...state, 
        curry: null, 
        error: action.payload,
        loading: false 
      };
    case 'SET_VALUE':
      return { ...state, name: action.payload };
    case 'SET_VALUE2':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default curryy;
