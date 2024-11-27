import { useContext, useState } from "react";
import { createContext } from "react";

export  const SnackbarContext = createContext()



export const SnackProvider =({children})=>{

  
     const [show,setShow]= useState(false)
    //  const [error,setError]=useState('')
     const [messege,setMessege]=useState('')
     const [explain,setExplain]=useState('')
     const [type,setType]= useState('info')
    



   const handleSnackbar =({error, successmessege})=>{
     

    console.log('context error', error)
    console.log('context successful' ,successmessege)
     
      if (error) {
        setShow(true)
        setMessege(error[0])
        setExplain(error[1])
        setType('error')
      } else if (successmessege) {
        setShow(true)
        setMessege(successmessege[0])
        setExplain(successmessege[1])
        setType('success')
      } else {
        setShow(false)
      }
    }







  

    return <SnackbarContext.Provider value={{type,show,setShow,messege,explain,handleSnackbar}}>
        {children}
        </SnackbarContext.Provider>
}

