import { useContext, useState } from "react";
import { createContext } from "react";

export  const SnackbarContext = createContext()



export const SnackProvider =({children})=>{

  
     const [show,setShow]= useState(false)
     const [error,setError]=useState('')
     const [messege,setMessege]=useState('')

    
 const handleSnackbar =({error})=>{

  
    if(error==null )
{    
    setShow(false)
}   
 else 
    { setShow(true)
   if (error) {
     setError(error[0])
     setMessege(error[1])
   } 
 }

}



    return <SnackbarContext.Provider value={{show,setShow,error,messege,handleSnackbar}}>
        {children}
        </SnackbarContext.Provider>
}

