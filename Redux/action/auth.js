export const fetchapilogin = (name,password) => ({
    type: 'FETCH_API_LOGIN',
    name,
    password
  });


  
  export const fetchapisuccessful = (data) => ({
    type: 'FETCH_API_SUCCESS',
    payload: 
      {data
      }
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


  export const locationrequest =()=>({

      type:'FETCH_API_LOCATION'
  })


  export const locationsuccesful =(data)=>({

    type:'FETCH_LOCATION_SUCCESSFUL',
    payload:{data}
})



export const partnerrequest =()=>({

  type:'FETCH_API_PARTNER'
})


export const partnersuccesful =(data)=>({

type:'FETCH_PARTNER_SUCCESSFUL',
payload:{data}
})


export const getuserstate =(name)=>({

   type:'GET_USER_STATE',
   name
})

 export const getuserstatesuccessful =(data)=>({

  type:'GET_USER_STATE_SUCCESSFUL',
  payload:{data}

 })